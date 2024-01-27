import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-family: 'Heir of Light';
  font-weight: 700;
  border: 0;
  border-radius: 3rem;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: black;
  box-shadow: 0 0 10px #df7abe;

  &.storybook-button--primary {
    color: white;
    background-color: #1ea7fd;
  }

  &.storybook-button--secondary {
    color: #333;
    background-color: transparent;
  }

  &.storybook-button--choice {
    font-size: 12px;
    padding: 11px 20px;
    width: 280px;
  }

  &.storybook-button--big {
    font-size: 12px;
    padding: 11px 20px;
    width: 280px;
    margin: 20px 0px;
  }

  &.storybook-button--large {
    font-size: 16px;
    padding: 12px 24px;
    width: 200px;
  }

  &:hover {
    box-shadow: 0 0 15px #df7abe;
  }
`;

const Button = ({ primary, backgroundColor, size, label, onClick }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <StyledButton
      type="button"
      className={`storybook-button--${size} ${mode}`}
      style={backgroundColor && { backgroundColor }}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['choice', 'big', 'large']),
  label: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'big',
  onClick: undefined,
  label: null,
};

export default Button;
