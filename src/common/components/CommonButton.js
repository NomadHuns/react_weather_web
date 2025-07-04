import styled from "styled-components";

const StyledButton = styled.button`
    background-color: #DDB130;
    color: #362A84;
    border: none;
    padding: 12px 20px;
    border-radius: 50px;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    height: 72px;
    width: 304px;
    font-family: "Open Sans", sans-serif;
`;

export function CommonButton({text, onClick}) {
    return (
        <StyledButton onClick={onClick}>{text}</StyledButton>
    );
}