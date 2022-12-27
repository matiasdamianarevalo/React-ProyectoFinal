import React, { useContext } from "react";
import { DataContext } from "context/DataProvider";
import { Link } from "react-router-dom";
import Nike from "images/logo192.png";
import { CartWidget } from "./CartWidget";

export const Header = () => {
  const value = useContext(DataContext);
  const [carrito] = value.carrito;
  const [menu, setMenu] = value.menu;

  const toogleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header>
      <div className="menu">
        <box-icon name="menu"></box-icon>
      </div>
      <Link to="/">
        <div className="logo">
          <img src={Nike} alt="Nike" width="80" />
        </div>
      </Link>
      <ul>
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="/productos">PRODUCTOS</Link>
        </li>
        <li>
          <Link to="/contacto">CONTACTO</Link>
        </li>
      </ul>
      <div className="cart" onClick={toogleMenu}>
        <CartWidget />
        <span className="item__total"> {carrito.length} </span>
      </div>
    </header>
  );
};
