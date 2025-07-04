import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;    /* 요소들을 세로 방향으로 정렬 */
    background: linear-gradient(210deg, rgb(25, 34, 64) 30%, rgb(150, 60, 168) 100%);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    width: 100vw;
    height: 230px;
`;

export function CommonContainer({children}) {
    return <Container>{children}</Container>
}