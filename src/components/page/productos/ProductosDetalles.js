import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "context/DataProvider";
import { useParams } from "react-router-dom";
import { Item } from "./Item";

export const ProductosDetalles = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  const addCarrito = value.addCarrito;
  const [detalle, setDetalle] = useState([]);
  const [url, setUrl] = useState(0);
  const [images] = useState("");
  const params = useParams();
  let item = 0;

  useEffect(() => {
    console.log("re render", params.id);
    productos.forEach((producto) => {
      if (producto.id === parseInt(params.id)) {
        setDetalle(producto);
        setUrl(0);
      }
    });
  }, [params.id, productos]);

  console.log(url);

  /*   useEffect(() => {
    const values = `${detalle.img1}${url}${detalle.img2}`;
    setImages(values);
  }, [url, params.id]); */
  /* 
  const handleInput = (e) => {
    const number = e.target.value.toString().padStart(2, "01");
    setUrl(number);
  }; */

  /*  if (detalle.length < 1) return null; */

  return (
    <>
      {
        <div className="detalles">
          <h2>{detalle.title}</h2>
          <p className="price">${detalle.price}</p>
          {url ? (
            <img src={images} alt={detalle.title} />
          ) : (
            <img src={detalle.image} alt={detalle.title} />
          )}
          <br></br>
          <img src={detalle.img1} alt=".." />
          <div className="grid">
            <div className="tamano">
              <select placeholder="Tamaño">
                <option value="1">37</option>
                <option value="1">38</option>
                <option value="1">39</option>
                <option value="1">40</option>
                <option value="1">41</option>
                <option value="1">42</option>
                <option value="1">43</option>
                <option value="1">44</option>
              </select>
              <p>TALLE</p>
            </div>
          </div>
          <button onClick={() => addCarrito(detalle.id)}>
            Añadir al carrito
          </button>
          <div className="description">
            <p>
              <b>Description: </b>
              {detalle.details}
            </p>
          </div>
        </div>
      }
      <h2 className="relacionados">Productos relacionados</h2>
      <div className="productos">
        {productos.map((producto) => {
          if (item < 6 && detalle.category === producto.category) {
            item++;
            return (
              <Item
                key={producto.id}
                title={producto.title}
                image={producto.image}
                category={producto.category}
                img1={producto.img1}
                price={producto.price}
                details={producto.details}
                id={producto.id}
              />
            );
          }else{
            return (console.error("error"))
            }
        })}
      </div>
    </>
  );
};