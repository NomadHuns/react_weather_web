import styled from "styled-components";

const StyledText = styled.div`
    font-size: ${props => props.fontSize || '64px'};
    font-family: 'Poppins', sans-serif;
    letter-spacing: ${props => props.letterSpacing || '-0.37px'};
    line-height: ${props => props.lineHeight || 'normal'};
    font-weight: ${props => props.fontWeight || 'normal'};
    color: ${props => props.fontColor || '#FFFFFF'};
    margin: ${props => props.margin || '0'};
`;

export function CommonText({text, fontSize, fontWeight, letterSpacing, fontColor, lineHeight}) {
    return (
        <StyledText fontSize={fontSize} fontWeight={fontWeight} letterSpacing={letterSpacing} fontColor={fontColor} lineHeight={lineHeight}>
            {text}
        </StyledText>
    );
}

export function TitleText({text, fontWeight, fontColor, lineHeight}) {
    return (
        <CommonText text={text} fontSize={'64px'} letterSpacing={'-0.37px'} fontWeight={fontWeight || 'bold'} fontColor={fontColor} lineHeight={lineHeight} />
    );
}