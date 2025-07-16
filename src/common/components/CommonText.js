import styled from "styled-components";
import {theme} from "../theme";

const StyledText = styled.div`
    font-size: ${props => props.fontSize || theme.text.default.fontSize};
    font-family: ${props => props.fontFamily || theme.text.default.fontFamily};
    letter-spacing: ${props => props.letterSpacing || theme.text.default.letterSpacing};
    line-height: ${props => props.lineHeight || theme.text.default.lineHeight};
    font-weight: ${props => props.fontWeight || theme.text.default.fontWeight};
    color: ${props => props.fontColor || theme.text.default.fontColor};
`;

/**
 * 텍스트 컴포넌트를 반환합니다.
 * @param {string} children - 텍스트
 * @param {string} fontSize - 폰트 사이즈
 * @param {string} fontFamily - 폰트명
 * @param {string} letterSpacing - 글자간 간격
 * @param {string} lineHeight - 글자 높이
 * @param {string} fontWeight - 글자 굵기
 * @param {string} fontColor - 글자색
 */
export function CommonText({children, fontSize, fontFamily, letterSpacing, lineHeight, fontWeight, fontColor}) {
    return (
        <StyledText
            fontSize={fontSize}
            fontFamily={fontFamily}
            letterSpacing={letterSpacing}
            lineHeight={lineHeight}
            fontWeight={fontWeight}
            fontColor={fontColor}
        >
            {children}
        </StyledText>
    );
}

export function TitleText({children, ...rest}) {
    return (
        <CommonText
            fontSize={theme.text.title?.fontSize}
            fontFamily={ theme.text.title?.fontFamily}
            letterSpacing={theme.text.title?.letterSpacing}
            lineHeight={theme.text.title?.lineHeight}
            fontWeight={theme.text.title?.fontWeight}
            color={theme.text.title?.color}
            {...rest}
        >
            {children}
        </CommonText>
    );
}

export function SubjectText({children, ...rest}) {
    return (
        <CommonText
            fontSize={theme.text.subject.fontSize}
            fontFamily={ theme.text.subject.fontFamily}
            letterSpacing={theme.text.subject.letterSpacing}
            lineHeight={theme.text.subject.lineHeight}
            fontWeight={theme.text.subject.fontWeight}
            color={theme.text.subject.color}
            {...rest}
        >
            {children}
        </CommonText>
    );
}

export function ContentText({children, ...rest}) {
    return (
        <CommonText
            fontSize={theme.text.content?.fontSize}
            fontFamily={ theme.text.content?.fontFamily}
            letterSpacing={theme.text.content?.letterSpacing}
            lineHeight={theme.text.content?.lineHeight}
            fontWeight={theme.text.content?.fontWeight}
            color={theme.text.content?.color}
            {...rest}
        >
            {children}
        </CommonText>
    );
}

export function DescriptionText({children, ...rest}) {
    return (
        <CommonText
            fontSize={theme.text.description.fontSize}
            fontFamily={ theme.text.description.fontFamily}
            letterSpacing={theme.text.description.letterSpacing}
            lineHeight={theme.text.description.lineHeight}
            fontWeight={theme.text.description.fontWeight}
            color={theme.text.description.color}
            {...rest}
        >
            {children}
        </CommonText>
    );
}

export function HintText({children, ...rest}) {
    return (
        <CommonText
            fontSize={theme.text.hint.fontSize}
            fontFamily={ theme.text.hint.fontFamily}
            letterSpacing={theme.text.hint.letterSpacing}
            lineHeight={theme.text.hint.lineHeight}
            fontWeight={theme.text.hint.fontWeight}
            color={theme.text.hint.color}
            {...rest}
        >
            {children}
        </CommonText>
    );
}