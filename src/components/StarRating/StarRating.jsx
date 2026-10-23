import PropTypes from 'prop-types';
import starIcon from '../../assets/icons/star.svg';
import styles from './StarRating.module.css';

/**
 * Рейтинг товара: выводит нужное количество SVG-звёздочек.
 */
function StarRating({ rating }) {
  const stars = Array.from({ length: rating });

  return (
    <div className={styles.rating} aria-label={`Рейтинг: ${rating} из 5`}>
      {stars.map((_, index) => (
        <img key={index} src={starIcon} alt="" className={styles.star} />
      ))}
    </div>
  );
}

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;
