import { useNavigate } from 'react-router-dom';
import {useRecoilState, useRecoilValue} from "recoil";
import {useEffect, useState} from "react";
import {getWeeklyWeatherByLocation} from "../../common/api/open_meteo/WeatherApi";
import {getAirQuality} from "../../common/api/open_meteo/AirQualityApi";
import {getCountryAndCity} from "../../common/api/open_street_map/StreetMapApi";
import {getMinAndMaxTemperatureToday, getWeeklyWeather} from "../../common/utils/WeatherUtil";
import {WeatherAtom} from "../../common/atoms/WeatherAtom";
import {LocationAtom} from "../../common/atoms/LocationAtom";
import {formatToAmPmTime, getCurrentHour24} from "../../common/utils/TimeUtil"; // 경로 수정

export function useDetailPage() {
    const navigate = useNavigate();
    const [weather, setWeather] = useRecoilState(WeatherAtom);
    const location = useRecoilValue(LocationAtom);

    const [city, setCity] = useState('Loading...');
    const [index, setIndex] = useState(0); // 슬라이더 인덱스 상태

    // 데이터 로딩 로직
    useEffect(() => {
        // location 값이 없으면 API를 호출하지 않음
        if (!location?.lat) return;

        async function fetchAllData() {

            try {
                // 여러 API를 병렬로 호출하여 성능 개선
                const [weatherData, airData, cityData] = await Promise.all([
                    getWeeklyWeatherByLocation(location.lat, location.lng),
                    getAirQuality(location.lat, location.lng),
                    getCountryAndCity(location.lat, location.lng)
                ]);

                // 날씨 정보 가공 및 상태 업데이트
                const weeklyWeather = getWeeklyWeather(weatherData);
                const minMaxToday = getMinAndMaxTemperatureToday(weatherData);

                setWeather((prev) => ({
                    ...prev,
                    weeklyWeather: weeklyWeather,
                    currentWeather: {
                        ...prev.currentWeather,
                        minTemperature: minMaxToday.minTemperature,
                        maxTemperature: minMaxToday.maxTemperature,
                        sunrise: formatToAmPmTime(weatherData.daily.sunrise[0], ':'),
                        sunset: formatToAmPmTime(weatherData.daily.sunset[0], '.'),
                        uv: weatherData.daily.uv_index_max[0],
                        airQuality: airData.hourly.european_aqi[getCurrentHour24()],
                    },
                }));

                // 도시 정보 상태 업데이트
                setCity(`${cityData.address.city}, ${cityData.address.country}`);

            } catch (e) {
                console.error("데이터 가져오기 실패:", e);
                setCity("위치 정보를 가져올 수 없습니다.");
            }
        }

        fetchAllData();
    }, [location, setWeather]); // location 값이 바뀔 때마다 재실행

    // 슬라이더 버튼 핸들러
    const handlePrev = () => {
        if (index > 0) setIndex(prev => prev - 1);
    };

    const handleNext = () => {
        if (index < 3) setIndex(prev => prev + 1);
    };

    // 컴포넌트에서 사용할 데이터와 함수들을 반환
    return { weather, city, index, handlePrev, handleNext, navigate };
}