import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import QuantitySelector from '../QuantitySelector/QuantitySelector';
import StarRating from '../StarRating/StarRating';
import styles from './ProductCard.module.css';

/**
 * Карточка товара. Все данные о товаре приходят через props.
 * Внутри хранит выбранное количество (из QuantitySelector)
 * и флаг "товар добавлен в корзину".
 */
function ProductCard({ image, title, category, rating, price, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    if (onAddToCart) {
      onAddToCart(title, quantity);
    }
  };

  return (
    <article className={styles.card}>
      <img src={image} alt={title} className={styles.image} />

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.row}>
          <div className={styles.info}>
            <span className={styles.category}>{category}</span>
            <StarRating rating={rating} />
            <span className={styles.price}>${price}</span>
          </div>

          <Button size="small" onClick={handleAddToCart} disabled={isAdded}>
            {isAdded ? 'In Cart ✓' : 'Add to Cart'}
          </Button>
        </div>
      </div>

      <div className={styles.footer}>
        <QuantitySelector onChange={setQuantity} />
      </div>
    </article>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  onAddToCart: PropTypes.func,
};

export default ProductCard;
