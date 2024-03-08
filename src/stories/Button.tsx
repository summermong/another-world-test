import React from 'react';
import styled from 'styled-components';
import themes from '../style/themes';

export interface ButtonProps {
  size?: string;
  label?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ size, label, onClick }) => {
  return (
    <StyledButton type="button" className={`storybook-button--${size}`} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  font-weight: 700;
  border: 0;
  border-radius: 3rem;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: black;
  box-shadow: 0 0 10px ${themes.pinkColor};
  background-color: white;

  &.storybook-button--choice {
    font-size: 12px;
    padding: 11px 20px;
    width: 300px;
  }

  &.storybook-button--share {
    font-size: 12px;
    padding: 11px 20px;
    width: 300px;
    margin: 10px 0px;
  }

  &.storybook-button--start {
    font-size: 16px;
    padding: 12px 24px;
    width: 200px;
    margin: 30px;
  }

  &:hover {
    box-shadow: 0 0 15px ${themes.pinkColor};
  }
`;

Button.defaultProps = {
  size: 'start',
  label: '버튼 텍스트',
  onClick: undefined,
};

export default Button;
