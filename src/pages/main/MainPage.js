import {Column, MainWrapper, Row} from "../../common/components/CommonWrapper";
import {CommonImage} from "../../common/components/CommonImage";
import {CommonText, ContentText} from "../../common/components/CommonText";
import {FullWidthContainer} from "../../common/components/CommonContainer";
import {DefaultDivider} from "../../common/components/CommonDivider";
import {CommonSpacing} from "../../common/components/CommonSpacing";
import {WeatherImage} from "../../components/WeatherImage";
import {TimeUtil} from "../../common/utils/TimeUtil";
import {useMainPage} from "./useMainPage";

export function MainPage() {
    // 커스텀 훅을 호출하여 로직의 결과물만 받아서 사용
    const { weather } = useMainPage();

    return (
        <MainWrapper>
            <CommonSpacing size={'16px'} />
            <WeatherImage size={'150px'} weatherCode={weather.currentWeather.weathercode} />
            <CommonText fontWeight={'500'} letterSpacing={'0.47px'} fontSize={'64px'}>{weather.currentWeather.temperature}°C</CommonText>
            <CommonText lineHeight={'1.0'}>Precipitations</CommonText>
            <CommonText text={''}>Max: 24° Min: 18°</CommonText>
            <CommonImage src={"/images/house.png"} size={'340px'} />
            <FullWidthContainer height={'230px'}>
                <Row mainAxisAlignment={'space-between'} px="35px" py="15px">
                    <ContentText fontWeight={'600'} fontFamily={`"Open Sans", sans-serif`}>Today</ContentText>
                    <ContentText fontWeight={'600'} fontFamily={`"Open Sans", sans-serif`}>{TimeUtil.getFormattedToday()}</ContentText>
                </Row>
                <DefaultDivider />
                <Row mainAxisAlignment={'space-between'} pt="20px">
                    {weather.nextFourHoursWeather.map((item) => (
                        <Column crossAxisAlignment={'center'}>
                            <ContentText fontWeight={'500'}>{item.temp}°C</ContentText>
                            <CommonSpacing size={'8px'} />
                            <WeatherImage size={'50px'} weatherCode={item.weathercode} />
                            <CommonSpacing size={'8px'} />
                            <ContentText text={item.time} fontWeight={'500'}>{item.time}</ContentText>
                        </Column>
                    ))}
                </Row>
            </FullWidthContainer>
            <CommonSpacing size={'56px'} />
        </MainWrapper>
    );
}