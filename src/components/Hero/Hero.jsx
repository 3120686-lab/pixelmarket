import PropTypes from 'prop-types';
import Button from '../Button/Button';
import styles from './Hero.module.css';

/**
 * Текстовый блок с заголовком, описанием и кнопкой.
 * Используется дважды: в начале страницы и в конце.
 */
function Hero({ title, description, buttonText, onButtonClick, size = 'large' }) {
  return (
    <section className={`${styles.hero} ${styles[size]}`}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <Button size={size === 'large' ? 'medium' : 'small'} onClick={onButtonClick}>
        {buttonText}
      </Button>
    </section>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func,
  size: PropTypes.oneOf(['large', 'small']),
};

export default Hero;
