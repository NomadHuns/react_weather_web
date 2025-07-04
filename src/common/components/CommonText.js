import styled from "styled-components";

const StyledText = styled.div`
    font-size: ${props => props.fontSize || '24px'};
    font-family: ${props => props.fontFamily || `'Poppins', sans-serif`};
    letter-spacing: ${props => props.letterSpacing || '0.47px'};
    line-height: ${props => props.lineHeight || 'normal'};
    font-weight: ${props => props.fontWeight || 'normal'};
    color: ${props => props.fontColor || '#FFFFFF'};
    margin: ${props => props.margin || '0'};
`;

export function CommonText({text, fontSize, fontWeight, letterSpacing, fontColor, lineHeight, fontFamily}) {
    return (
        <StyledText
            fontSize={fontSize}
            fontWeight={fontWeight}
            letterSpacing={letterSpacing}
            fontColor={fontColor}
            lineHeight={lineHeight}
            fontFamily={fontFamily}
        >
            {text}
        </StyledText>
    );
}

export function TitleText({text, fontWeight, fontColor, lineHeight}) {
    return (
        <CommonText text={text} fontSize={'64px'} letterSpacing={'-0.37px'} fontWeight={fontWeight || 'bold'} fontColor={fontColor} lineHeight={lineHeight} />
    );
}

export function SubjectText({text}) {
    return (
        <CommonText text={text} fontWeight={'600'} fontSize={'28px'} fontFamily={`"Open Sans", sans-serif`} />
    );
}

export function ContentText({text, fontWeight, fontFamily}) {
    return (
        <CommonText text={text} fontWeight={fontWeight} fontSize={'20px'} fontFamily={fontFamily} />
    );
}

export function DescriptionText({text, fontWeight}) {
    return (
        <CommonText text={text} fontWeight={fontWeight} fontSize={'16px'} fontFamily={`"Open Sans", sans-serif`} />
    );
}