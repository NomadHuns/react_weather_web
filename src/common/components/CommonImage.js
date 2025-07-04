import styled from "styled-components";

const StyledImage = styled.img`
    width: 200px;
    height: auto;
    border-radius: 10px;
`;

export function CommonImage({ src }) {
    return <StyledImage src={src}/>;
}