import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;    /* 요소들을 세로 방향으로 정렬 */
    background: linear-gradient(210deg, rgb(25, 34, 64) 30%, rgb(150, 60, 168) 100%);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: ${props => props.radius || '30px'};
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    ${props => props.borderColor && `border: 1px solid ${props.borderColor};`}
    
    ${props => props.p && `padding: ${props.p};`}
    ${props => props.py && `padding-top: ${props.py}; padding-bottom: ${props.py};`}
    ${props => props.px && `padding-left: ${props.px}; padding-right: ${props.px};`}
    ${props => props.pt && `padding-top: ${props.pt};`}
    ${props => props.pr && `padding-right: ${props.pr};`}
    ${props => props.pb && `padding-bottom: ${props.pb};`}
    ${props => props.pl && `padding-left: ${props.pl};`}
    
    ${props => props.m && `margin: ${props.m};`}
    ${props => props.my && `margin-top: ${props.my}; margin-bottom: ${props.my};`}
    ${props => props.mx && `margin-left: ${props.mx}; margin-right: ${props.mx};`}
    ${props => props.mt && `margin-top: ${props.mt};`}
    ${props => props.mr && `margin-right: ${props.mr};`}
    ${props => props.mb && `margin-bottom: ${props.mb};`}
    ${props => props.ml && `margin-left: ${props.ml};`}
`;

export function CommonContainer({children, width, height, radius, borderColor, ...rest}) {
    return <Container width={width} height={height} radius={radius} borderColor={borderColor} {...rest}>
        {children}
    </Container>
}

export function FullWidthContainer({children, height, radius, borderColor, ...rest}) {
    return <Container width={'100%'} height={height} radius={radius} borderColor={borderColor} {...rest}>
        {children}
    </Container>
}