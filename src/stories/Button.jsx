import PropTypes from 'prop-types';
import styled from 'styled-components';
import themes from '../style/themes';

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

const StyledButton = styled.button`
  font-weight: 700;
  border: 0;
  border-radius: 3rem;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: black;
  box-shadow: 0 0 10px ${themes.pinkColor};

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
    margin: 30px;
  }

  &:hover {
    box-shadow: 0 0 15px ${themes.pinkColor};
  }
`;

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
