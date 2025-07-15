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

export function CommonText({children, fontSize, fontWeight, letterSpacing, fontColor, lineHeight, fontFamily}) {
    return (
        <StyledText
            fontSize={fontSize}
            fontWeight={fontWeight}
            letterSpacing={letterSpacing}
            fontColor={fontColor}
            lineHeight={lineHeight}
            fontFamily={fontFamily}
        >
            {children}
        </StyledText>
    );
}

export function TitleText({children, fontWeight, fontColor, lineHeight}) {
    return (
        <CommonText fontSize={'64px'} letterSpacing={'-0.37px'} fontWeight={fontWeight || 'bold'} fontColor={fontColor} lineHeight={lineHeight}>{children}</CommonText>
    );
}

export function SubjectText({children, fontsize = '28px'}) {
    return (
        <CommonText fontWeight={'600'} fontSize={fontsize} fontFamily={`"Open Sans", sans-serif`}>{children}</CommonText>
    );
}

export function ContentText({children, fontWeight, fontFamily}) {
    return (
        <CommonText fontWeight={fontWeight} fontSize={'20px'} fontFamily={fontFamily}>{children}</CommonText>
    );
}

export function DescriptionText({children, fontWeight}) {
    return (
        <CommonText fontWeight={fontWeight} fontSize={'16px'} fontFamily={`"Open Sans", sans-serif`}>{children}</CommonText>
    );
}