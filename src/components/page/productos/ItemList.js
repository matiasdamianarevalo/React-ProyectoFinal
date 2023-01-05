import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "context/DataProvider";

export const ItemList = ({title, image, categoryid, price, id}) => {

  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;

  return (
    
    <div key={id} className="producto">
      <Link to={`/category/Shoe${categoryid}`}>
      <div className="producto__img">
        <img src={image} alt={title} />
      </div>
      </Link>
      <div className="producto__footer">
        <h1>{title}</h1>
        <p>{categoryid}</p>
        <p className="price">${price} </p>
      </div>
      <div className="bottom">
        <button onClick={() => addCarrito(id)} className="btn">Añadir al carrito</button>
        <div>
        <Link to={`/category/${id}`} className="btn">Detalles</Link>
        </div>
      </div>
    </div>
  );
};
