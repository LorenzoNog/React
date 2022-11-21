import React from "react"
import '../Css/ItemDetail.css';
import EventsFunctional from "../Eventos/EventsFunctional";
import { Link } from 'react-router-dom';
import { useState,useContext } from "react";
import { CartContext } from "./CartContext";


const ItemDetail = ({data}) => {
   const [itemCount, setItemCount] = useState(0);
   const test = useContext(CartContext);

   const onAdd = (qty) => {
        alert('has seleccionado ' + qty + ' unidades')
        setItemCount(qty);
        test.addToCart(data,qty); 
    }
    return(
        <>
        {
            <div className="containerDetail">
                <div className="infoDetail">
                    <div className="imagen">
                        <img className="imgDetail" src={data.image} alt="Iced"/>  
                    </div>
                    <div className="datos">
                        <h2 className="nombre">{data.name}</h2>
                        <h5>{data.calories} calories</h5>
                    </div>
                </div>
                <div className="descripcion">
                    <div className="acercaDelCafe">
                        <div className="stars">
                            5 ★ item
                        </div>
                        <div className="cafe">
                            {data.desc}
                        </div>
                        <div className="calorias">
                            <p>{data.calories}, 10g sugar, 4g fat</p>
                        </div>
                    </div>
                    <div className="buttonAdd">
                        {
                            itemCount === 0 ?
                            <EventsFunctional initial={itemCount} onAdd={onAdd} /> :
                            <Link to='/cart' className="link"><button className="btnAddCart">Buy</button></Link>
                        }
                    </div>
                </div>
            </div>
    }
        </>
    
    )
}
export default ItemDetail