import {theme} from "../../common/theme";
import {ThemeProvider} from "styled-components";
import {Column, MainWrapper, Row} from "../../common/components/CommonWrapper";
import {CommonText, ContentText, DescriptionText, SubjectText} from "../../common/components/CommonText";
import {CommonSpacing} from "../../common/components/CommonSpacing";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa6";
import {CommonIconButton} from "../../common/components/CommonButton";
import {CommonContainer} from "../../common/components/CommonContainer";
import {SlTarget} from "react-icons/sl";
import {CommonDivider} from "../../common/components/CommonDivider";
import {GiHamburgerMenu, GiSun} from "react-icons/gi";
import {useEffect, useState} from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import {WeatherAtom} from "../../common/atoms/WeatherAtom";
import {WeatherImage} from "../../common/components/WeatherImage";
import {LocationAtom} from "../../common/atoms/LocationAtom";
import {getWeeklyWeatherByLocation} from "../../common/api/WeatherApi";
import {getMinAndMaxTemperatureToday, getUvIndex, getWeeklyWeather} from "../../common/utils/WeatherUtil";
import {formatToAmPmTime} from "../../common/utils/TimeUtil";

export function DetailPage() {
    const [index, setIndex] = useState(0);
    const [weather, setWeather] = useRecoilState(WeatherAtom);
    const location = useRecoilValue(LocationAtom);

    // 위치가 바뀔 때마다 날씨 요청
    useEffect(() => {
        async function fetchTodayWeather() {
            try {
                // 일주일 날씨 정보 불러오기
                const data = await getWeeklyWeatherByLocation(location.lat, location.lng);
                console.log(data.daily);
                const weeklyWeather = getWeeklyWeather(data);
                setWeather((prev) => ({
                    ...prev,
                    weeklyWeather: weeklyWeather
                }));
                const minMaxToday = getMinAndMaxTemperatureToday(data);
                setWeather((prev) => ({
                    ...prev,
                    currentWeather: {
                        ...prev.currentWeather,
                        minTemperature: minMaxToday.minTemperature,
                        maxTemperature: minMaxToday.maxTemperature,
                        sunrise: formatToAmPmTime(data.daily.sunrise[0], ':'),
                        sunset: formatToAmPmTime(data.daily.sunset[0], '.'),
                        uv: data.daily.uv_index_max[0]
                    },
                }));
            } catch (e) {
                console.error("날씨 데이터 가져오기 실패:", e);
            }
        }

        fetchTodayWeather();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <MainWrapper>
                <CommonSpacing size={'32px'} />
                <CommonText text={'Seoul, Korea'} lineHeight={'1.0'} />
                <CommonText text={`Max: ${weather.currentWeather.maxTemperature}°\u00A0\u00A0\u00A0Min: ${weather.currentWeather.minTemperature}°`} />
                <CommonSpacing size={'32px'} />
                <Row width={'75%'} mainAxisAlignment={'start'}>
                    <CommonText text={'7-Days Forecasts'} fontFamily={`"Open Sans", sans-serif`} fontWeight={'bold'}/>
                </Row>
                <CommonSpacing size={'16px'} />
                <Row width={'95%'} mainAxisAlignment={'start'}>
                    <CommonIconButton
                        icon={FaAngleLeft}
                        size="40px"
                        onClick={() => {
                            if (index > 0) {
                                setIndex(prev => prev-1);
                            }
                        }}
                    />
                    {weather.weeklyWeather.map((item, itemIndex) => {
                        if (itemIndex >= index && itemIndex <= index+3 ) {
                            return <>
                                <CommonContainer width={'20vw'} radius={'50px'} height={'172px'}>
                                    <Column height={'100%'}>
                                        <ContentText text={`${item.temp}°C`} fontWeight={'500'} />
                                        <CommonSpacing size={'8px'} />
                                        <WeatherImage size={'50px'} weatherCode={item.weathercode} />
                                        <CommonSpacing size={'8px'} />
                                        <ContentText text={item.dayOfWeek} fontWeight={'500'} />
                                    </Column>
                                </CommonContainer>
                                <CommonSpacing size={'8px'} />
                            </>
                         } else {
                            return <></>
                        }
                    })}
                    <CommonIconButton
                        icon={FaAngleRight}
                        size="40px"
                        onClick={() => {
                            if (index < 3) {
                                setIndex(prev => prev+1);
                            }
                        }}
                    />
                </Row>
                <CommonSpacing size={'32px'} />
                <CommonContainer width={'75%'} radius={'20px'} height={'160px'}>
                    <Column height={'100%'} crossAxisAlignment={'start'} pt={'20px'}>
                        <Row mainAxisAlignment={'start'} width={'90%'} >
                            <SlTarget size={25} color={'#FFFFFF'} />
                            <CommonSpacing size={'8px'} />
                            <DescriptionText text={'AIR QUALITY'} fontFamily={`"Open Sans", sans-serif`} />
                        </Row>
                        <CommonSpacing size={'8px'} />
                        <Row mainAxisAlignment={'start'} width={'90%'}>
                            <SubjectText text={'3-Low Health Risk'} />
                        </Row>
                        <CommonSpacing size={'8px'} />
                        <Row mainAxisAlignment={'start'} width={'90%'} >
                            <CommonDivider color={'#805BCA'} height={'3px'} />
                        </Row>
                        <CommonSpacing size={'16px'} />
                        <Row mainAxisAlignment={'space-between'} width={'90%'} onClick={() => {console.log('see more')}}>
                            <CommonText text={'See more'} fontSize={'18px'} fontFamily={`"Open Sans", sans-serif`} fontWeight={'600'} />
                            <FaAngleRight size={'30px'} color={'#FFFFFF'} />
                        </Row>
                    </Column>
                </CommonContainer>
                <CommonSpacing size={'32px'} />
                <Row width={'75%'}>
                    <CommonContainer width={'47%'} radius={'20px'} height={'140px'} borderColor="#F7CBFD" >
                        <Row width={'100%'} pt={'10px'}>
                            <GiSun size={40} color={'#FFFFFF'} />
                            <DescriptionText text={'SUNRISE'} />
                        </Row>
                        <Row width={'100%'}>
                            <SubjectText text={`${weather.currentWeather.sunrise}`} />
                        </Row>
                        <CommonSpacing size={'8px'} />
                        <Row width={'100%'}>
                            <DescriptionText text={`Sunset: ${weather.currentWeather.sunset}`} />
                        </Row>
                    </CommonContainer>
                    <CommonSpacing size={'6%'} />
                    <CommonContainer width={'47%'} radius={'20px'} height={'140px'} borderColor="#F7CBFD" >
                        <Row width={'100%'} pt={'10px'}>
                            <GiSun size={40} color={'#FFFFFF'} />
                            <CommonText text={'UV INDEX'} fontSize={'16px'} fontFamily={`"Open Sans", sans-serif`} />
                        </Row>
                        <Column>
                            <SubjectText text={weather.currentWeather.uv} />
                            <CommonSpacing size={'4px'} />
                            <ContentText text={getUvIndex(weather.currentWeather.uv)} />
                        </Column>
                    </CommonContainer>
                </Row>
                <CommonSpacing size={'32px'} />
                <CommonIconButton icon={GiHamburgerMenu} onClick={() => {window.location.href = '/main';}} size="60px" />
            </MainWrapper>
        </ThemeProvider>
    );
}