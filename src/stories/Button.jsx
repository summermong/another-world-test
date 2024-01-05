import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-family: 'Heir of Light';
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  width: 200px;

  &.storybook-button--primary {
    color: white;
    background-color: #1ea7fd;
  }

  &.storybook-button--secondary {
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  }

  &.storybook-button--small {
    font-size: 12px;
    padding: 10px 16px;
  }

  &.storybook-button--medium {
    font-size: 14px;
    padding: 11px 20px;
  }

  &.storybook-button--large {
    font-size: 16px;
    padding: 12px 24px;
    color: black;
    box-shadow: 0 0 10px #df7abe;
  }

  &:hover {
    box-shadow: 0 0 15px #df7abe;
  }
`;

const Button = ({ primary, backgroundColor, size, label, onClick, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <StyledButton
      type="button"
      className={`storybook-button storybook-button--${size} ${mode}`}
      style={backgroundColor && { backgroundColor }}
      onClick={onClick}
      {...props}
    >
      {label}
    </StyledButton>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};

export default Button;
