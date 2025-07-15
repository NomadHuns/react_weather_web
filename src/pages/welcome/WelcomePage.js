import {ThemeProvider} from 'styled-components';
import {theme} from '../../common/theme';
import {TitleText} from "../../common/components/CommonText";
import {CommonSpacing} from "../../common/components/CommonSpacing";
import {CommonButton} from "../../common/components/CommonButton";
import {MainWrapper} from "../../common/components/CommonWrapper";
import {CommonImage} from "../../common/components/CommonImage";
import {useNavigate} from "react-router-dom";

export function WelcomePage() {
    const navigate = useNavigate();

    return (
        <ThemeProvider theme={theme}>
            <MainWrapper>
                <CommonImage src={"/icons/cloudy.png"} />
                <CommonSpacing size={'48px'} />
                <TitleText>Weather</TitleText>
                <TitleText fontWeight={'500'} fontColor={'#DDB130'} lineHeight={'1.0'}>ForeCasts</TitleText>
                <CommonSpacing size={'48px'} />
                <CommonButton text={'Get Start'} onClick={() => navigate('/main')}/>
            </MainWrapper>
        </ThemeProvider>
    );
}