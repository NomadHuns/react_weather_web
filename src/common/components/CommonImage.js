import styled from "styled-components";

const StyledImage = styled.img`
    width: ${props => props.size || '200px'};
    height: auto;
    border-radius: 10px;
`;

export function CommonImage({ src, size }) {
    return <StyledImage src={src} size={size} />;
}