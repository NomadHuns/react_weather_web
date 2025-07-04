import styled, {css} from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || 'column'};    /* 요소들을 세로 방향으로 정렬 */
    justify-content: ${props => props.justifyContent || 'center'} ;  /* 가로 중앙 */
    align-items: ${props => props.alignItems || 'center'};      /* 세로 중앙 */
    height: ${props => props.height || 'auto'};
    width: ${props => props.width || 'auto'};
    background: ${props => props.backgroundColor || 'linear-gradient(180deg, rgb(25, 34, 64) 60%, rgb(150, 60, 168) 100%)'};
    ${props => css`
        padding-top: ${props.pt || 0};
        padding-right: ${props.pr || 0};
        padding-bottom: ${props.pb || 0};
        padding-left: ${props.pl || 0};
  `}
`;

export function CommonWrapper({ children, direction, height, justifyContent, backgroundColor, ...rest }) {
    return <Wrapper direction={direction} height={height} justifyContent={justifyContent} backgroundColor={backgroundColor} {...rest} >{children}</Wrapper>;
}

export function MainWrapper({children}) {
    return <CommonWrapper height={'100vh'}>{children}</CommonWrapper>
}

export function Column({children, mainAxisAlignment, crossAxisAlignment, ...rest}) {
    return <CommonWrapper
        justifyContent={crossAxisAlignment}
        alignItems={mainAxisAlignment}
        backgroundColor={'transparent'}
        {...rest}
    >
        {children}
    </CommonWrapper>
}

export function Row({children, mainAxisAlignment, crossAxisAlignment, ...rest}) {
    return <CommonWrapper
        direction={'row'}
        justifyContent={mainAxisAlignment}
        alignItems={crossAxisAlignment}
        backgroundColor={'transparent'}
        {...rest}
    >
        {children}
    </CommonWrapper>
}