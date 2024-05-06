/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import './CartItem.css';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { increaseAmount, decreaseAmount, removeFromCart } =
    useContext(CartContext);
  const { id, title, imageUrl, price, amount } = item;
  return (
    <div className="cart">
      <img className="cart__item-image" src={`../${imageUrl}`} alt="" />
      <div className="cart__item-info">
        <Link to={`/product/${id}`} className="cart__title">
          {title}
        </Link>
        <div className="cart__amount">
          <div onClick={() => decreaseAmount(id)} className="cart__amount-dec">
            <IoMdRemove className="icons" />
          </div>
          <div>{amount}</div>
          <div onClick={() => increaseAmount(id)} className="cart__amount-inc">
            <IoMdAdd className="icons" />
          </div>
        </div>
      </div>
      <div className="cart__price">{parseFloat(price).toFixed(2)}</div>
      <div className="cart__total-price">
        {parseFloat(price * amount).toFixed(2)} грн
      </div>
      <div onClick={() => removeFromCart(id)}>
        <IoMdClose className="cart_close-item" />
      </div>
    </div>
  );
};

export default CartItem;
