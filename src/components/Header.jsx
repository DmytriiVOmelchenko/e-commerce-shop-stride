import { useContext, useEffect, useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { FaBullseye } from 'react-icons/fa6';
import { SidebarContext } from '../context/SidebarContext';
import Logo from '../img/Logo.png';
import './Header.css';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [isActive, setIsActive] = useState(FaBullseye);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header className={isActive ? 'header__header-active' : 'header'}>
      <div className="header__nav">
        <div>
          <Link className="header__logo" to={'/'}>
            <img className="header__logo-img" src={Logo} alt="" />
            <h2>Stride style</h2>
          </Link>
        </div>
        <div className="header__cart-container">
          <BsCart2
            className="header__cart icons"
            onClick={() => setIsOpen(!isOpen)}
          />

          {!!itemAmount && (
            <div className="header__item-amount icons">{itemAmount}</div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
