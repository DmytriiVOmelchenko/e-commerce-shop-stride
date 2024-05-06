import './Hero.css';
import HeroSneaker from '../img/HeroSneaker.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__main">
        <div className="hero__title">
          <h2>Комфорт у кожному кроці</h2>
          <p>
            Відчуй різницю з нашими спортивними кросівками. Ми пропонуємо тільки
            якісні бренди, які забезпечать максимальний комфорт та підтримку під
            час будь-яких активностей.
          </p>
        </div>
        <div>
          <img className="hero__image-sneaker" src={HeroSneaker} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
