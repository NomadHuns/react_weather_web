import styled from "styled-components";

const StyledDiv = styled.div`
    background: ${props => props.color || '#D9D9D9'};
    width: 100%;
    height: ${props => props.height || '1px'};
`;

export function CommonDivider({color, height}) {
    return <StyledDiv color={color} height={height} />;
}

export function DefaultDivider() {
    return <CommonDivider />
}