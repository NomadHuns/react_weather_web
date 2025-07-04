import {ThemeProvider} from "styled-components";
import {theme} from "../../common/theme";
import {CommonWrapper} from "../../common/components/CommonWrapper";
import {CommonImage} from "../../common/components/CommonImage";

export function MainPage() {
    return (
        <ThemeProvider theme={theme}>
            <CommonWrapper>
                <CommonImage src={"/icons/cloudy.png"} />
            </CommonWrapper>
        </ThemeProvider>
    );
}