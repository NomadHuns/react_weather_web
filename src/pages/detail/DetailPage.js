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
import {GiSun} from "react-icons/gi";
import {WeatherImage} from "../../common/components/WeatherImage";
import {WeatherUtil} from "../../utils/WeatherUtil";
import {useDetailPage} from "./useDetailPage";

export function DetailPage() {
    const { weather, city, index, handlePrev, handleNext } = useDetailPage();

    return (
        <ThemeProvider theme={theme}>
            <MainWrapper>
                <CommonSpacing size={'32px'} />
                <CommonText lineHeight={'1.0'}>{city}</CommonText>
                <CommonText>Max: {weather.currentWeather.maxTemperature}° Min: {weather.currentWeather.minTemperature}°</CommonText>
                <CommonSpacing size={'32px'} />
                <Row width={'75%'} mainAxisAlignment={'start'}>
                    <CommonText fontFamily={`"Open Sans", sans-serif`} fontWeight={'bold'}>7-Days Forecasts</CommonText>
                </Row>
                <CommonSpacing size={'16px'} />
                <Row width={'95%'} mainAxisAlignment={'start'}>
                    <CommonIconButton icon={FaAngleLeft} size="40px" onClick={handlePrev} />
                    {weather.weeklyWeather.slice(index, index + 4).map((item, itemIndex) => (
                        <CommonContainer width={'20vw'} radius={'50px'} height={'172px'} mr={itemIndex === 3 ? '0px' : '8px'}>
                            <Column height={'100%'}>
                                <ContentText fontWeight={'500'}>{item.temp}°C</ContentText>
                                <CommonSpacing size={'8px'} />
                                <WeatherImage size={'50px'} weatherCode={item.weathercode} />
                                <CommonSpacing size={'8px'} />
                                <ContentText fontWeight={'500'}>{item.dayOfWeek}</ContentText>
                            </Column>
                        </CommonContainer>
                    ))}
                    <CommonIconButton icon={FaAngleRight} size="40px" onClick={handleNext} />
                </Row>
                <CommonSpacing size={'32px'} />
                <CommonContainer width={'75%'} radius={'20px'} height={'160px'}>
                    <Column height={'100%'} crossAxisAlignment={'start'} pt={'20px'}>
                        <Row mainAxisAlignment={'start'} width={'90%'} >
                            <SlTarget size={25} color={'#FFFFFF'} />
                            <CommonSpacing size={'8px'} />
                            <DescriptionText fontFamily={`"Open Sans", sans-serif`}>AIR QUALITY</DescriptionText>
                        </Row>
                        <CommonSpacing size={'8px'} />
                        <Row mainAxisAlignment={'start'} width={'90%'}>
                            <SubjectText fontsize={'24px'}>{weather.currentWeather.airQuality} - {WeatherUtil.getAirQualityIndex(weather.currentWeather.airQuality)}</SubjectText>
                        </Row>
                        <CommonSpacing size={'8px'} />
                        <Row mainAxisAlignment={'start'} width={'90%'} >
                            <CommonDivider color={'#805BCA'} height={'3px'} />
                        </Row>
                        <CommonSpacing size={'16px'} />
                        <Row mainAxisAlignment={'space-between'} width={'90%'} onClick={() => {console.log('see more')}}>
                            <CommonText fontSize={'18px'} fontFamily={`"Open Sans", sans-serif`} fontWeight={'600'}>See more</CommonText>
                            <FaAngleRight size={'30px'} color={'#FFFFFF'} />
                        </Row>
                    </Column>
                </CommonContainer>
                <CommonSpacing size={'32px'} />
                <Row width={'75%'}>
                    <CommonContainer width={'47%'} radius={'20px'} height={'140px'} borderColor="#F7CBFD" >
                        <Row pt={'10px'}>
                            <GiSun size={40} color={'#FFFFFF'} />
                            <DescriptionText>SUNRISE</DescriptionText>
                        </Row>
                        <Row>
                            <SubjectText>{weather.currentWeather.sunrise}</SubjectText>
                        </Row>
                        <CommonSpacing size={'8px'} />
                        <Row>
                            <DescriptionText>Sunset: {weather.currentWeather.sunset}</DescriptionText>
                        </Row>
                    </CommonContainer>
                    <CommonSpacing size={'6%'} />
                    <CommonContainer width={'47%'} radius={'20px'} height={'140px'} borderColor="#F7CBFD" >
                        <Row pt={'10px'}>
                            <GiSun size={40} color={'#FFFFFF'} />
                            <CommonText fontSize={'16px'} fontFamily={`"Open Sans", sans-serif`}>UV INDEX</CommonText>
                        </Row>
                        <Column>
                            <SubjectText>{weather.currentWeather.uv}</SubjectText>
                            <CommonSpacing size={'4px'} />
                            <ContentText>{WeatherUtil.getUvIndex(weather.currentWeather.uv)}</ContentText>
                        </Column>
                    </CommonContainer>
                </Row>
            </MainWrapper>
        </ThemeProvider>
    );
}