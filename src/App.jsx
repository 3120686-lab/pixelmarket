import { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ProductCard from './components/ProductCard/ProductCard';
import landingPageImage from './assets/images/landing-page.svg';
import socialMediaKitImage from './assets/images/social-media-kit.svg';
import designImage from './assets/images/design.svg';
import styles from './App.module.css';

const NAV_LINKS = ['Products', 'Categories', 'Pricing'];

const PRODUCTS = [
  {
    id: 1,
    image: landingPageImage,
    title: 'Landing Page Template',
    category: 'Templates',
    rating: 5,
    price: 18,
  },
  {
    id: 2,
    image: socialMediaKitImage,
    title: 'Social Media Kit',
    category: 'Marketing',
    rating: 4,
    price: 16,
  },
  {
    id: 3,
    image: designImage,
    title: 'Design',
    category: 'UI Design',
    rating: 4,
    price: 16,
  },
];

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (title, quantity) => {
    setCartCount((prevCount) => prevCount + quantity);
    console.log(`Добавлено в корзину: ${title} × ${quantity}`);
  };

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.page}>
      <Header links={NAV_LINKS} cartCount={cartCount} />

      <main className={styles.main}>
        <Hero
          title="Digital products for modern creators"
          description="Discover high-quality digital products for designers, creators, and modern teams."
          buttonText="Explore Products"
          onButtonClick={scrollToProducts}
        />

        <section id="products">
          <h2 className={styles.sectionTitle}>Popular Products</h2>
          <div className={styles.grid}>
            {PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                category={product.category}
                rating={product.rating}
                price={product.price}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </section>

        <Hero
          size="small"
          title="Everything you need to create better digital products."
          description="Explore curated digital products made for modern creators and teams."
          buttonText="Browse Products"
          onButtonClick={scrollToProducts}
        />
      </main>
    </div>
  );
}

export default App;
