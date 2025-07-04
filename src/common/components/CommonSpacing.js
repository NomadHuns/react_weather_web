import styled from "styled-components";

const StyledDiv = styled.div`
    width: ${props => props.size || '4px'};
    height: ${props => props.size || '4px'};
`;


export function CommonSpacing({size}) {
    return (
        <StyledDiv size={size}></StyledDiv>
    );
}