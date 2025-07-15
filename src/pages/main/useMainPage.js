import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import {WeatherAtom} from "../../common/atoms/WeatherAtom";
import {LocationAtom} from "../../common/atoms/LocationAtom";
import {getTodayWeatherByLocation, getWeatherByLocation} from "../../common/api/open_meteo/WeatherApi";
import {getNextFourHoursWeather} from "../../common/utils/WeatherUtil";

export function useMainPage() {
    const navigate = useNavigate();
    const [weather, setWeather] = useRecoilState(WeatherAtom);
    const [location, setLocation] = useRecoilState(LocationAtom);

    // 1. 현재 위치를 가져오는 로직
    useEffect(() => {
        // 컴포넌트 언마운트 시 state 업데이트 방지를 위한 변수
        let isMounted = true;

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    if (isMounted) {
                        setLocation({
                            lat: pos.coords.latitude,
                            lng: pos.coords.longitude
                        });
                    }
                },
                (error) => {
                    console.error("위치 오류:", error);
                },
                {
                    enableHighAccuracy: true,
                    timeout: 3000,
                    maximumAge: 0
                }
            );
        }

        return () => {
            isMounted = false;
        };
    }, [setLocation]); // setLocation은 바뀌지 않지만, 명시적으로 추가

    // 2. 위치가 바뀔 때마다 날씨를 요청하는 로직
    useEffect(() => {
        if (!location?.lat) return; // location이 없으면 실행하지 않음

        async function fetchWeatherData() {
            try {
                // 병렬로 API 호출하여 성능 최적화
                const [todayData, hourlyData] = await Promise.all([
                    getTodayWeatherByLocation(location.lat, location.lng),
                    getWeatherByLocation(location.lat, location.lng)
                ]);

                const nextFourHours = getNextFourHoursWeather(hourlyData);

                setWeather(prev => ({
                    ...prev,
                    currentWeather: todayData.current_weather,
                    nextFourHoursWeather: nextFourHours
                }));

            } catch (e) {
                console.error("날씨 데이터 가져오기 실패:", e);
            }
        }

        fetchWeatherData();
    }, [location, setWeather]); // location이나 setWeather가 바뀔 때 실행

    // 3. 컴포넌트에서 사용할 값과 함수들을 반환
    return { weather, navigate };
}