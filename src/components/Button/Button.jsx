import PropTypes from 'prop-types';
import styles from './Button.module.css';

/**
 * Универсальная кнопка (Add to Cart, Buy Now, Explore Products и т.д.).
 * Состояния из Figma: Default, Hover (через CSS :hover), Disabled.
 */
function Button({ children, onClick, variant = 'primary', size = 'medium', disabled = false }) {
  const className = [styles.button, styles[variant], styles[size]].join(' ');

  return (
    <button type="button" className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium']),
  disabled: PropTypes.bool,
};

export default Button;
