import React, { createContext, useState, useEffect } from "react";
import Data from "Data";

export const DataContext = createContext();

export const DataProvider = (props) => {
	const [productos, setProductos] = useState([]);
	const [menu, setMenu] = useState(false)
	const [carrito, setCheckout] =useState([])
	const [total, setTotal] = useState(0)

	console.log(carrito)

  useEffect(() => {
		const producto = Data.items
		
		if(producto){
			setProductos(producto)
		}else{
			setProductos([])
		}
	}, []);

	const addCarrito = (id) =>{
		const check = carrito.every(item =>{
			return item.id !== id
			
		})
		if(check){
			const data = productos.filter(producto =>{
				return producto.id === id
			})
			setCheckout([...carrito, ...data])
		}else{
			alert("El producto se ha añadido al carrito")
		}
	}
	useEffect(() =>{
		const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'))
		if(dataCarrito){
			setCheckout(dataCarrito)
		}
	},[])

	useEffect(() =>{
		localStorage.setItem('dataCarrito', JSON.stringify(carrito))
	},[carrito])

	useEffect(() =>{
		const getTotal = () =>{
			const res = carrito.reduce((prev, item) =>{
				return prev + (item.price * item.cantidad)
			},0)
			setTotal(res)
		}
		getTotal()
	},[carrito])
	
	const value = {
		productos : [productos],
		menu: [menu, setMenu],
		carrito: [carrito, setCheckout],
		addCarrito: addCarrito,
		total: [total, setTotal]
	}
	return (
		<DataContext.Provider value={value}>
			{props.children}
		</DataContext.Provider>
	)
};
