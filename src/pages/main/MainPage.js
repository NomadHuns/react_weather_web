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
import {useEffect, useState} from "react";
import {getTodayWeatherByLocation} from "../../common/api/weather_api";
import {WeatherImage} from "../../common/components/WeatherImage";

export function MainPage() {
    const [currentWeather, setCurrentWeather] = useState({weathercode: 1, temperature: 20.5});

    const [location, setLocation] = useState({lat: 37.5665, lng: 126.9780});

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
        async function fetchCurrentWeather() {
            try {
                const data = await getTodayWeatherByLocation(location.lat, location.lng);
                console.log(data);
                setCurrentWeather(data.current_weather);
            } catch (e) {
                console.error("날씨 데이터 가져오기 실패:", e);
            }
        }

        fetchCurrentWeather();
    }, [location]);

    return (
        <ThemeProvider theme={theme}>
            <MainWrapper>
                <CommonSpacing size={'16px'} />
                <WeatherImage size={'150px'} weatherCode={currentWeather.weathercode} />
                <CommonText text={`${currentWeather.temperature}°C`} fontWeight={'500'} letterSpacing={'0.47px'} fontSize={'64px'}/>
                <CommonText text={'Precipitations'} lineHeight={'1.0'} />
                <CommonText text={'Max: 24°\u00A0\u00A0\u00A0Min: 18°'} />
                <CommonImage src={"/images/house.png"} size={'340px'} />
                <FullWidthContainer height={'230px'}>
                    <Row mainAxisAlignment={'space-between'} pl="35px" pr="35px" pt="15px" pb="15px">
                        <ContentText text={'Today'} fontWeight={'600'} fontFamily={`"Open Sans", sans-serif`}/>
                        <ContentText text={'July, 21'} fontWeight={'600'} fontFamily={`"Open Sans", sans-serif`}/>
                    </Row>
                    <DefaultDivider />
                    <Row mainAxisAlignment={'space-between'} pl="35px" pr="35px" pt="20px">
                        <Column crossAxisAlignment={'center'}>
                            <ContentText text={'10°C'} fontWeight={'500'} />
                            <CommonSpacing size={'8px'} />
                            <CommonImage src={"/icons/cloudy.png"} size={'50px'} />
                            <CommonSpacing size={'8px'} />
                            <ContentText text={'15.00'} fontWeight={'500'} />
                        </Column>
                        <Column crossAxisAlignment={'center'}>
                            <ContentText text={'10°C'} fontWeight={'500'} />
                            <CommonSpacing size={'8px'} />
                            <CommonImage src={"/icons/cloudy.png"} size={'50px'} />
                            <CommonSpacing size={'8px'} />
                            <ContentText text={'16.00'} fontWeight={'500'} />
                        </Column>
                        <Column crossAxisAlignment={'center'}>
                            <ContentText text={'10°C'} fontWeight={'500'} />
                            <CommonSpacing size={'8px'} />
                            <CommonImage src={"/icons/cloudy.png"} size={'50px'} />
                            <CommonSpacing size={'8px'} />
                            <ContentText text={'17.00'} fontWeight={'500'} />
                        </Column>
                        <Column crossAxisAlignment={'center'}>
                            <ContentText text={'10°C'} fontWeight={'500'} />
                            <CommonSpacing size={'8px'} />
                            <CommonImage src={"/icons/cloudy.png"} size={'50px'} />
                            <CommonSpacing size={'8px'} />
                            <ContentText text={'18.00'} fontWeight={'500'} />
                        </Column>
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