import styled from "styled-components";

const StyledButton = styled.button`
    background-color: #DDB130;
    color: #362A84;
    border: none;
    padding: 12px 20px;
    border-radius: 50px;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    height: 72px;
    width: 304px;
    font-family: "Open Sans", sans-serif;
`;

export function CommonButton({text, onClick}) {
    return (
        <StyledButton onClick={onClick}>{text}</StyledButton>
    );
}

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  width: ${props => props.size || '40px'};
  height: ${props => props.size || '40px'};

  border-radius: 50%;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  &:active {
    background: rgba(0, 0, 0, 0.2);
  }
`;

export function CommonIconButton({ icon: Icon, onClick, size, color = '#FFFFFF' }) {
    return (
        <IconButton onClick={onClick} size={size}>
            <Icon size={size} color={color} />
        </IconButton>
    );
}