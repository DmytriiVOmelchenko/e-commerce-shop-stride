import { useContext } from 'react';
import { SidebarContext } from '../context/SidebarContext';
import { IoArrowForwardSharp } from 'react-icons/io5';
import { FiTrash2 } from 'react-icons/fi';
import './Sidebar.css';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, itemAmount, total, clearCart } = useContext(CartContext);
  const [parent] = useAutoAnimate();
  return (
    <div className={`${isOpen ? 'sidebar__active' : 'sidebar'}`}>
      <div className="sidebar__header">
        <div className="sidebar__header-title">
          Кошик ({itemAmount} {itemAmount < 1 ? 'товар' : 'товарів'})
        </div>
        <div onClick={handleClose} className="sidebar__back">
          <IoArrowForwardSharp className="sidebar__back-icon" />
        </div>
      </div>
      <div ref={parent} className="sidebar__cart-items">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="sidebar__footer">
        <div className="sidebar__footer-total">
          <div className="sidebaer__total-amount">
            <span>Всього: </span> {total} грн
          </div>
          <div onClick={clearCart} className="sidebar__footer-clear">
            <FiTrash2 className="icons" />
          </div>
        </div>
      </div>
      <div className="sidebar__button">
        <button>Оформити</button>
      </div>
    </div>
  );
};

export default Sidebar;
