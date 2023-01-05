import React, { useContext } from "react";
import { DataContext } from "context/DataProvider";
import { ItemList } from "./ItemList";
import { Link } from "react-router-dom";

export const ItemListContainer = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  return (
    <>
      <h1 className="produ">PRODUCTOS</h1>
      <div className="productos">
        {productos.map((producto) => (
          <Link id={producto.id}
          to={'/Shoe/' + producto.id}>
          <ItemList
            key={producto.categoryid}
            title={producto.title}
            image={producto.image}
            categoryid={producto.categoryid}
            img1={producto.img1}
            img2={producto.img2}
            price={producto.price}
            details={producto.details}
            id={producto.id}
          />
          </Link>
        ))}
      </div>
    </>
  );
};
