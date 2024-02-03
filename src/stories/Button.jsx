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

  &.storybook-button--choice {
    font-size: 12px;
    padding: 11px 20px;
    width: 300px;
  }

  &.storybook-button--result {
    font-size: 12px;
    padding: 11px 20px;
    width: 300px;
    margin: 10px 0px;
  }

  &.storybook-button--start {
    font-size: 16px;
    padding: 12px 24px;
    width: 200px;
  }

  &:hover {
    box-shadow: 0 0 15px #df7abe;
  }
`;

const Button = ({ backgroundColor, size, label, onClick }) => {
  return (
    <StyledButton
      type="button"
      className={`storybook-button--${size}`}
      style={backgroundColor && { backgroundColor }}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['choice', 'result', 'start']),
  label: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  size: 'start',
  onClick: undefined,
  label: null,
};

export default Button;
