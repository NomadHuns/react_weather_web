import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;    /* 요소들을 세로 방향으로 정렬 */
    justify-content: center;  /* 가로 중앙 */
    align-items: center;      /* 세로 중앙 */
    height: 100vh;            /* 전체 높이 */
    background: linear-gradient(180deg, rgb(25, 34, 64) 60%, rgb(150, 60, 168) 100%);
`;

export function CommonWrapper({ children }) {
    return <Container>{children}</Container>;
}