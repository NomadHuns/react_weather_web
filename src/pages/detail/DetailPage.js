import {theme} from "../../common/theme";
import {ThemeProvider} from "styled-components";
import {Column, MainWrapper, Row} from "../../common/components/CommonWrapper";
import {CommonText, ContentText, DescriptionText, SubjectText} from "../../common/components/CommonText";
import {CommonSpacing} from "../../common/components/CommonSpacing";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa6";
import {CommonIconButton} from "../../common/components/CommonButton";
import {CommonContainer} from "../../common/components/CommonContainer";
import {CommonImage} from "../../common/components/CommonImage";
import {SlTarget} from "react-icons/sl";
import {CommonDivider} from "../../common/components/CommonDivider";
import {GiHamburgerMenu, GiSun} from "react-icons/gi";

export function DetailPage() {
    return (
        <ThemeProvider theme={theme}>
            <MainWrapper>
                <CommonSpacing size={'32px'} />
                <CommonText text={'North America'} lineHeight={'1.0'} />
                <CommonText text={'Max: 24°\u00A0\u00A0\u00A0Min: 18°'} />
                <CommonSpacing size={'32px'} />
                <Row width={'75%'} mainAxisAlignment={'start'}>
                    <CommonText text={'7-Days Forecasts'} fontFamily={`"Open Sans", sans-serif`} fontWeight={'bold'}/>
                </Row>
                <CommonSpacing size={'16px'} />
                <Row width={'95%'} mainAxisAlignment={'start'}>
                    <CommonIconButton icon={FaAngleLeft} onClick={() => {console.log('left')}} size="40px" />
                    <CommonContainer width={'20vw'} radius={'50px'} height={'172px'}>
                        <Column height={'100%'}>
                            <ContentText text={'18°C'} fontWeight={'500'} />
                            <CommonSpacing size={'8px'} />
                            <CommonImage src={"/icons/cloudy.png"} size={'50px'} />
                            <CommonSpacing size={'8px'} />
                            <ContentText text={'Mon'} fontWeight={'500'} />
                        </Column>
                    </CommonContainer>
                    <CommonSpacing size={'8px'} />
                    <CommonContainer width={'20vw'} radius={'50px'} height={'172px'}>
                        <Column height={'100%'}>
                            <ContentText text={'19°C'} fontWeight={'500'} />
                            <CommonSpacing size={'8px'} />
                            <CommonImage src={"/icons/cloud.png"} size={'50px'} />
                            <CommonSpacing size={'8px'} />
                            <ContentText text={'Tue'} fontWeight={'500'} />
                        </Column>
                    </CommonContainer>
                    <CommonSpacing size={'8px'} />
                    <CommonContainer width={'20vw'} radius={'50px'} height={'172px'}>
                        <Column height={'100%'}>
                            <ContentText text={'19°C'} fontWeight={'500'} />
                            <CommonSpacing size={'8px'} />
                            <CommonImage src={"/icons/cloudy_rain.png"} size={'50px'} />
                            <CommonSpacing size={'8px'} />
                            <ContentText text={'Wed'} fontWeight={'500'} />
                        </Column>
                    </CommonContainer>
                    <CommonSpacing size={'8px'} />
                    <CommonContainer width={'20vw'} radius={'50px'} height={'172px'}>
                        <Column height={'100%'}>
                            <ContentText text={'20°C'} fontWeight={'500'} />
                            <CommonSpacing size={'8px'} />
                            <CommonImage src={"/icons/cloudy_rain.png"} size={'50px'} />
                            <CommonSpacing size={'8px'} />
                            <ContentText text={'Thu'} fontWeight={'500'} />
                        </Column>
                    </CommonContainer>
                    <CommonIconButton icon={FaAngleRight} onClick={() => {console.log('right')}} size="40px" />
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
                            <SubjectText text={'5:28 AM'} />
                        </Row>
                        <CommonSpacing size={'8px'} />
                        <Row width={'100%'}>
                            <DescriptionText text={'Sunset: 7.25 PM'} />
                        </Row>
                    </CommonContainer>
                    <CommonSpacing size={'6%'} />
                    <CommonContainer width={'47%'} radius={'20px'} height={'140px'} borderColor="#F7CBFD" >
                        <Row width={'100%'} pt={'10px'}>
                            <GiSun size={40} color={'#FFFFFF'} />
                            <CommonText text={'UV INDEX'} fontSize={'16px'} fontFamily={`"Open Sans", sans-serif`} />
                        </Row>
                        <Column>
                            <SubjectText text={'4'} />
                            <ContentText text={'Modarate'} />
                        </Column>
                    </CommonContainer>
                </Row>
                <CommonSpacing size={'32px'} />
                <CommonIconButton icon={GiHamburgerMenu} onClick={() => {window.location.href = '/main';}} size="60px" />
            </MainWrapper>
        </ThemeProvider>
    );
}