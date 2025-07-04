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

export function MainPage() {
    return (
        <ThemeProvider theme={theme}>
            <MainWrapper>
                <CommonImage src={"/icons/cloudy.png"} size={'150px'} />
                <CommonText text={'19°'} fontWeight={'500'} letterSpacing={'0.47px'} fontSize={'64px'}/>
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