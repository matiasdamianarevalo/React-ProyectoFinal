import React, { useContext } from "react";
import { DataContext } from "context/DataProvider";
import { ProductoItem } from "./ProductoItem";

export const ProductosList = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  return (
    <>
      <h1 className="produ">PRODUCTOS</h1>
      <div className="productos">
        {productos.map((producto) => (
          <ProductoItem
            key={producto.id}
            title={producto.title}
            image={producto.image}
            category={producto.category}
            img1={producto.img1}
            img2={producto.img2}
            price={producto.price}
            details={producto.details}
            id={producto.id}
          />
        ))}
      </div>
    </>
  );
};
