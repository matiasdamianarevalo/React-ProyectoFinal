import React, { useContext } from "react";
import { DataContext } from "context/DataProvider";

export const Checkout = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito, setCheckout] = value.carrito;
  const [total] = value.total;

  const tooglefalse = () => {
    setMenu(false);
  };

  const reduce = (id) => {
    carrito.forEach((item) => {
      if (item.id === id) {
        item.cantidad === 1 ? (item.cantidad = 1) : (item.cantidad -= 1);
      }
      setCheckout([...carrito]);
    });
  };
  const increase = (id) => {
    carrito.forEach((item) => {
      if (item.id === id) {
        item.cantidad += 1;
      }
      setCheckout([...carrito]);
    });
  };

  const removeProducto = (id) => {
    if (window.confirm("¿Quieres eliminar el producto del carrito?")) {
      carrito.forEach((item, index) => {
        if (item.id === id) {
          item.cantidad = 1;
          carrito.splice(index, 1);
        }
      });
      setCheckout([...carrito]);
    }
  };

  const shop1 = menu ? "carritos shop1" : "carrito";
  const shop2 = menu ? "carrito shop2" : "carrito";

  return (
    <div className={shop1}>
      <div className={shop2}>
        <div onClick={tooglefalse} className="carrito__close">
          <box-icon name="x"></box-icon>
        </div>
        <h2>Carrito de compras</h2>
        <div className="carrito__center">
          {carrito.length === 0 ? (
            <h2 style={{ textAlign: "center", fontSize: "3rem" }}>
              Carrito Vacio
            </h2>
          ) : (
            <>
              {carrito.map((producto) => (
                <div className="carrito__item" key={producto.id}>
                  <img src={producto.image} alt={producto.title} />
                  <div>
                    <h3> {producto.title} </h3>
                    <p className="price">${producto.price}</p>
                  </div>
                  <div>
                    <box-icon
                      onClick={() => increase(producto.id)}
                      name="up-arrow"
                      type="solid"
                    />
                    <p className="cantidad">{producto.cantidad}</p>
                    <box-icon
                      onClick={() => reduce(producto.id)}
                      name="down-arrow"
                      type="solid"
                    />
                  </div>
                  <div
                    onClick={() => removeProducto(producto.id)}
                    className="remove__item"
                  >
                    <box-icon name="trash" />
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        <div className="carrito__footer">
          <h3>Total: ${total}</h3>
          <button className="btn">COMPRAR</button>
        </div>
      </div>
    </div>
  );
};
