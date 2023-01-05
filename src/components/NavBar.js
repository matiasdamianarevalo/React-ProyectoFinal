import React, { useContext } from "react";
import { DataContext } from "context/DataProvider";
import { Link } from "react-router-dom";
import Nike from "images/logo192.png";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  const value = useContext(DataContext);
  const [carrito] = value.carrito;
  const [menu, setMenu] = value.menu;

  const toogleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav>
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
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/category">SHOES</Link>
        </li>
        <li>
          <Link to="/category">CLOTHING</Link>
        </li>
      </ul>
      <div className="cart" onClick={toogleMenu}>
        <CartWidget />
        <span className="item__total"> {carrito.length} </span>
      </div>
    </nav>
  );
};

/* 
const filterResult = (catItem) =>{ 
  const result = Categoryid.filter((curdate) =>{
      return curdate.category === catItem;
  });
  setData(result);
}

onclick={() => filterResult('shoe')}}



{Data.map((values) => {
  const {id,title,description} = values;
  return (
      <>
      
      
      
      
      </>


  )

})} */