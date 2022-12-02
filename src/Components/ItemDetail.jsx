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
        alert('Has seleccionado ' + qty + ' unidades!')
        setItemCount(qty);
        test.addToCart(data,qty); 
    }
    
    return(
        <>
        {
            <div className="containerDetail">
                <div className="infoDetail">
                    <div className="imgProductContainer">
                        <img className="imgDetail" src={data.image} alt="BachiRoasteryPic"/>  
                    </div>
                    <div className="data">
                        <h2 className="name">{data.name}</h2>
                        <h5>{data.calories} calories</h5>
                    </div>
                </div>
                <div className="description">
                    <div className="AboutCoffe">
                        <div className="stars">
                            5 ★ ITEM
                        </div>
                        <div className="coffe">
                            {data.desc}
                        </div>
                        <div className="calories">
                            <p>0g sugar added.</p>
                        </div>
                    </div>
                    <div className="buttonAdd">
                        {
                            itemCount === 0 ?
                            <EventsFunctional initial={itemCount} onAdd={onAdd} /> :
                            <Link to='/cart' className="link"><button className="btnAddCart">Checkout</button></Link>
                        }
                    </div>
                </div>
            </div>
    }
        </>
    
    )
}
export default ItemDetail