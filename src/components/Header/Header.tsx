import "./Header.css";
import logo from "../../assets/yural.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header container">
      <div className="header-block">
        <Link to='/'><img className="header-block__logo" src={logo} alt="Логотип фаворит партс"/></Link>
        <p className="header-block__text">Международный оптовый гипермаркет автозапчастей</p>
      </div>
      <div className="header-block">
        <div className="call">
          <a className="call__number" href="tel:+78007778548">8 800 777 8548</a>
          <span className="call__subtitle">Круглосуточно. Бесплатно по России.</span>
        </div>
        <div className="header-links">
          <div className="header-links__wrapper">
            <a className="header-links__link" href="#">Стать поставщиком</a>
            <a className="header-links__link" href="#">Стать клиентом</a>
          </div>
          <div className="header-params">
            <select className="header-params__option" name="language">
              <option value="Ру">Ру</option>
              <option value="En">En</option>
            </select>
            <select className="header-params__option" name="coutry">
              <option value="Москва">Москва</option>
              <option value="СПБ">СПБ</option>
              <option value="Курск">Курск</option>
              <option value="Воронеж">Воронеж</option>
            </select>
          </div>
        </div>
        <button className="header-login">Вход</button>
        <div className="header__burger"></div>
      </div>
    </header>
  );
};

export default Header;
