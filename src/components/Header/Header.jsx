import PropTypes from 'prop-types';
import cartIcon from '../../assets/icons/cart.svg';
import searchIcon from '../../assets/icons/search.svg';
import userIcon from '../../assets/icons/user.svg';
import styles from './Header.module.css';

/**
 * Шапка сайта: логотип, навигация и иконки (Cart, Search, User).
 * Количество товаров в корзине приходит через props.
 */
function Header({ links, cartCount }) {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        PixelMarket
      </a>

      <nav className={styles.nav}>
        {links.map((link) => (
          <a key={link} href="#" className={styles.link}>
            {link}
          </a>
        ))}
      </nav>

      <div className={styles.actions}>
        <button type="button" className={styles.iconButton} aria-label="Корзина">
          <img src={cartIcon} alt="" />
          {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
        </button>
        <button type="button" className={styles.iconButton} aria-label="Поиск">
          <img src={searchIcon} alt="" />
        </button>
        <button type="button" className={styles.iconButton} aria-label="Профиль">
          <img src={userIcon} alt="" />
        </button>
      </div>
    </header>
  );
}

Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  cartCount: PropTypes.number.isRequired,
};

export default Header;
