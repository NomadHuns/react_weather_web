import styled, {ThemeProvider} from 'styled-components';
import { theme } from '../../common/theme';
import {CommonText} from "../../common/components/CommonText";
import {CommonSpacing} from "../../common/components/CommonSpacing";
import {CommonButton} from "../../common/components/CommonButton";

const Container = styled.div`
    display: flex;
    flex-direction: column;    /* 요소들을 세로 방향으로 정렬 */
    justify-content: center;  /* 가로 중앙 */
    align-items: center;      /* 세로 중앙 */
    height: 100vh;            /* 전체 높이 */
    background: linear-gradient(180deg, rgb(25, 34, 64) 60%, rgb(150, 60, 168) 100%);
`;

const StyledImage = styled.img`
    width: 200px;
    height: auto;
    border-radius: 10px;
`;

export function WelcomePage() {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <StyledImage src={"/icons/cloudy.png"}></StyledImage>
                <CommonSpacing size={'48px'} />
                <CommonText text={"Weather"} fontSize={'64px'} fontWeight={'bold'} />
                <CommonText text={"ForeCasts"} fontSize={'64px'} fontWeight={'500'} fontColor={'#DDB130'} lineHeight={'1.0'}/>
                <CommonSpacing size={'48px'} />
                <CommonButton text={'Get Start'} />
            </Container>
        </ThemeProvider>
    );
}