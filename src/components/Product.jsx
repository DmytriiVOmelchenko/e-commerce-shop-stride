import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import './Product.css';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

/* eslint-disable react/prop-types */
const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, title, imageUrl, price } = product;
  return (
    <div className="product">
      <div className="product__container-image">
        <img className="product__image" src={imageUrl} alt="" />
      </div>
      <div className="product__title">{title}</div>
      <div className="product__price">{price} грн</div>

      <div className="product__action">
        <button
          onClick={() => addToCart(product, id)}
          className="product__button"
        >
          <BsPlus className="product__icon-plus" />
        </button>
        <Link to={`/product/${id}`} className="product__button">
          <BsEyeFill className="product__icon-eye" />
        </Link>
      </div>
    </div>
  );
};

export default Product;
