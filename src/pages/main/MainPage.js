import {ThemeProvider} from "styled-components";
import {theme} from "../../common/theme";
import {Column, MainWrapper, Row} from "../../common/components/CommonWrapper";
import {CommonImage} from "../../common/components/CommonImage";
import {CommonText, ContentText} from "../../common/components/CommonText";
import {FullWidthContainer} from "../../common/components/CommonContainer";
import {DefaultDivider} from "../../common/components/CommonDivider";
import {CommonSpacing} from "../../common/components/CommonSpacing";
import {CommonIconButton} from "../../common/components/CommonButton";
import {GiHamburgerMenu} from "react-icons/gi";
import {MdLocationOn} from "react-icons/md";
import {useEffect} from "react";
import {getTodayWeatherByLocation, getWeatherByLocation} from "../../common/api/WeatherApi";
import {WeatherImage} from "../../common/components/WeatherImage";
import {useRecoilState} from "recoil";
import {WeatherAtom} from "../../common/atoms/WeatherAtom";
import {LocationAtom} from "../../common/atoms/LocationAtom";
import {getNextFourHoursWeather} from "../../common/utils/WeatherUtil";
import {getFormattedToday} from "../../common/utils/TimeUtil";

export function MainPage() {
    const [weather, setWeather] = useRecoilState(WeatherAtom);
    const [location, setLocation] = useRecoilState(LocationAtom);

    // 현재 위치 가져오기
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    setLocation({
                        lat: pos.coords.latitude,
                        lng: pos.coords.longitude
                    });
                },
                (error) => {
                    if (error.code === error.POSITION_UNAVAILABLE) {
                        console.warn("위치 정보를 가져올 수 없습니다. 네트워크 환경을 확인하세요.:", error);
                    } else {
                        console.error("위치 오류:", error);
                    }
                },
                {
                    enableHighAccuracy: true,
                    timeout: 3000,
                    maximumAge: 0
                }
            );
        }
    }, []);

    // 위치가 바뀔 때마다 날씨 요청
    useEffect(() => {
        async function fetchTodayWeather() {
            try {
                // 현재 시각 날씨 정보 가져오기
                const data = await getTodayWeatherByLocation(location.lat, location.lng);
                setWeather((prev) => ({
                    ...prev,
                    currentWeather: data.current_weather,
                }));

                // 현재 시각 이후 4시간까지 날씨 정보 가져오기
                const fourHoursData = await getWeatherByLocation(location.lat, location.lng);
                const fourHoursDataTempData = getNextFourHoursWeather(fourHoursData);
                setWeather((prev) => ({
                    ...prev,
                    nextFourHoursWeather: fourHoursDataTempData
                }));
            } catch (e) {
                console.error("날씨 데이터 가져오기 실패:", e);
            }
        }

        fetchTodayWeather();
    }, [location]);

    return (
        <ThemeProvider theme={theme}>
            <MainWrapper>
                <CommonSpacing size={'16px'} />
                <WeatherImage size={'150px'} weatherCode={weather.currentWeather.weathercode} />
                <CommonText text={`${weather.currentWeather.temperature}°C`} fontWeight={'500'} letterSpacing={'0.47px'} fontSize={'64px'}/>
                <CommonText text={'Precipitations'} lineHeight={'1.0'} />
                <CommonText text={'Max: 24°\u00A0\u00A0\u00A0Min: 18°'} />
                <CommonImage src={"/images/house.png"} size={'340px'} />
                <FullWidthContainer height={'230px'}>
                    <Row mainAxisAlignment={'space-between'} px="35px" py="15px">
                        <ContentText text={'Today'} fontWeight={'600'} fontFamily={`"Open Sans", sans-serif`}/>
                        <ContentText text={getFormattedToday()} fontWeight={'600'} fontFamily={`"Open Sans", sans-serif`}/>
                    </Row>
                    <DefaultDivider />
                    <Row mainAxisAlignment={'space-between'} pt="20px">
                        {weather.nextFourHoursWeather.map((item) => (
                            <Column crossAxisAlignment={'center'}>
                                <ContentText text={`${item.temp}°C`} fontWeight={'500'} />
                                <CommonSpacing size={'8px'} />
                                <WeatherImage size={'50px'} weatherCode={item.weathercode} />
                                <CommonSpacing size={'8px'} />
                                <ContentText text={item.time} fontWeight={'500'} />
                            </Column>
                        ))}
                    </Row>
                </FullWidthContainer>
                <CommonSpacing size={'16px'} />
                <Row mainAxisAlignment={'space-around'} width={'100%'} >
                    <CommonIconButton icon={MdLocationOn} onClick={() => {window.location.href = '/main';}} size="40px" />
                    <CommonIconButton icon={GiHamburgerMenu} onClick={() => {window.location.href = '/detail';}} size="40px" />
                </Row>
            </MainWrapper>
        </ThemeProvider>
    );
}