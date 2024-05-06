import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import Product from '../components/Product';
import './Home.css';
import Hero from '../components/Hero';

const Home = () => {
  const { products } = useContext(ProductContext);
  return (
    <div>
      <Hero />
      <h2 className="home__title">Кросівки</h2>
      <section className="products">
        {products.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </section>
    </div>
  );
};

export default Home;
