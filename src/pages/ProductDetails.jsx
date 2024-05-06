import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { CartContext } from '../context/CartContext';
import './ProductDetails.css';
import { ProductContext } from '../context/ProductContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return <section>Loading ....</section>;
  }

  const { title, price, description, imageUrl } = product;

  return (
    <section className="details">
      <div className="detail__container">
        <div>
          <img className="details__image" src={`../${imageUrl}`} alt="" />
        </div>
        <div className="detail__info">
          <h1>{title}</h1>
          <div className="detail__price">{price} грн</div>
          <p>{description}</p>
          <button
            onClick={() => addToCart(product, product.id)}
            className="details__button"
          >
            Додати в кошик
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
