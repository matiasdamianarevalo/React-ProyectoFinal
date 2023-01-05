import React from 'react'
/* import { Link } from "react-router-dom";
import { ItemList } from '../productos/ItemList'; */
import { ItemListContainer } from '../productos/ItemListContainer';
/* import Shoe from "../inicio/Shoe"; */

export default function Inicio() {
    return (
        <>
        <div className="box">
        <h3 className="animacion">Productos Disponibles</h3>
        </div>
        <ItemListContainer />
        </>
    )
}
