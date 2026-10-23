import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './QuantitySelector.module.css';

/**
 * Селектор количества "- 1 +".
 * Хранит количество во внутреннем состоянии (useState)
 * и сообщает новое значение родителю через onChange.
 */
function QuantitySelector({ initialValue = 1, min = 1, max = 99, onChange }) {
  const [quantity, setQuantity] = useState(initialValue);

  const updateQuantity = (newValue) => {
    setQuantity(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleDecrease = () => {
    if (quantity > min) {
      updateQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      updateQuantity(quantity + 1);
    }
  };

  return (
    <div className={styles.selector}>
      <button
        type="button"
        className={styles.control}
        onClick={handleDecrease}
        disabled={quantity <= min}
        aria-label="Уменьшить количество"
      >
        −
      </button>
      <span className={styles.value}>{quantity}</span>
      <button
        type="button"
        className={styles.control}
        onClick={handleIncrease}
        disabled={quantity >= max}
        aria-label="Увеличить количество"
      >
        +
      </button>
    </div>
  );
}

QuantitySelector.propTypes = {
  initialValue: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
};

export default QuantitySelector;
