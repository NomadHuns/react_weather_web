import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: ${props => props.direction || 'column'};    /* 요소들을 세로 방향으로 정렬 */
    justify-content: ${props => props.justifyContent || 'center'} ;  /* 가로 중앙 */
    align-items: ${props => props.alignItems || 'center'};      /* 세로 중앙 */
    height: ${props => props.height || 'auto'};
    width: ${props => props.width || 'auto'};
    background: ${props => props.backgroundColor || 'linear-gradient(180deg, rgb(25, 34, 64) 60%, rgb(150, 60, 168) 100%)'};
    /* 1. 전체 여백 (p) */
    /* p prop이 있으면 모든 방향에 padding을 적용합니다. */
    ${props => props.p && `padding: ${props.p};`}
    
    /* 2. 수직/수평 여백 (py, px) */
    /* py, px prop이 있으면 각각의 방향에 padding을 덮어씁니다. */
    ${props => props.py && `padding-top: ${props.py}; padding-bottom: ${props.py};`}
    ${props => props.px && `padding-left: ${props.px}; padding-right: ${props.px};`}
    
    /* 3. 특정 방향 여백 (pt, pr, pb, pl) */
    /* 가장 구체적인 prop이 마지막에 와서 다른 값들을 덮어 쓸 수 있게 합니다. */
    ${props => props.pt && `padding-top: ${props.pt};`}
    ${props => props.pr && `padding-right: ${props.pr};`}
    ${props => props.pb && `padding-bottom: ${props.pb};`}
    ${props => props.pl && `padding-left: ${props.pl};`}
`;

export function CommonWrapper({ children, direction, height, justifyContent, backgroundColor, ...rest }) {
    return <Wrapper
        direction={direction}
        height={height}
        justifyContent={justifyContent}
        backgroundColor={backgroundColor}
        {...rest}
    >
        {children}
    </Wrapper>;
}

// export function MainWrapper({children}) {
//     return <CommonWrapper height={'100vh'}>{children}</CommonWrapper>
// }

export function Column({children, mainAxisAlignment, crossAxisAlignment, width, ...rest}) {
    return <CommonWrapper
        justifyContent={crossAxisAlignment}
        alignItems={mainAxisAlignment}
        backgroundColor={'transparent'}
        width={width ?? '100%'}
        {...rest}
    >
        {children}
    </CommonWrapper>
}

export function Row({children, mainAxisAlignment, crossAxisAlignment, width, ...rest}) {
    return <CommonWrapper
        direction={'row'}
        justifyContent={mainAxisAlignment}
        alignItems={crossAxisAlignment}
        backgroundColor={'transparent'}
        width={width ?? '100%'}
        {...rest}
    >
        {children}
    </CommonWrapper>
}