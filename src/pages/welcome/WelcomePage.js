import {ThemeProvider} from 'styled-components';
import {theme} from '../../common/theme';
import {TitleText} from "../../common/components/CommonText";
import {CommonSpacing} from "../../common/components/CommonSpacing";
import {CommonButton} from "../../common/components/CommonButton";
import {CommonWrapper} from "../../common/components/CommonWrapper";
import {CommonImage} from "../../common/components/CommonImage";

export function WelcomePage() {
    return (
        <ThemeProvider theme={theme}>
            <CommonWrapper>
                <CommonImage src={"/icons/cloudy.png"} />
                <CommonSpacing size={'48px'} />
                <TitleText text={"Weather"} />
                <TitleText text={"ForeCasts"} fontWeight={'500'} fontColor={'#DDB130'} lineHeight={'1.0'}/>
                <CommonSpacing size={'48px'} />
                <CommonButton text={'Get Start'} />
            </CommonWrapper>
        </ThemeProvider>
    );
}