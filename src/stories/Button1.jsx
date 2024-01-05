import PropTypes from 'prop-types';

export const Button1 = ({backgroundColor, size, label}) => {
    return (
        <button
        className={['storybook-button', `storybook-button--${size}`].join(' ')}
        style={backgroundColor && { backgroundColor }}>{label}</button>
    )
}

Button1.propTypes = {
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    label: PropTypes.string.isRequired,
};

Button1.defaultProps = {
    backgroundColor: null,
    size: 'medium',
};
  