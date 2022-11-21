import React from "react";
import { useContext } from "react"
import { CartContext } from "./CartContext"
import {Link} from 'react-router-dom'
import '../Css/Cart.css';

const Cart = () => {
    const test = useContext(CartContext);
    const {deleteItem} = useContext(CartContext);
    const totalCart = test.cartList.reduce((prev,act)=> prev + act.qty * act.cost,0)
    return(
        <>
                <div className="itemsCart">
                {
                    (test.cartList.length > 0) ? 
                    test.cartList.map(item => {
                        return(
                            <>
                                <div className="cardsProductos">
                                    <div className="cardCart">
                                            <img className="imgCart" src={item.image} alt=""/> 
                                            <div className="nombreCafe">
                                                <span>{item.name}</span>  
                                            </div>
                                        <div className="info">
                                            <p>Cantidad: {item.qty}</p>
                                            <p>Precio: ${item.cost}</p>
                                            <p>Subtotal: ${item.qty * item.cost}</p>
                                        </div>
                                        <div>
                                            <button className="btnDelete" onClick={() => deleteItem(item.id)} >Eliminar</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }) : 
                    <h1>
                        No hay productos en el carrito 
                        <Link to={'/'} className='link'>
                            <button className="btnSigaComprando">Siga comprando!</button>
                        </Link>
                        
                    </h1>
                }
                </div>
                <div className="pedido">
                    {
                        (test.cartList.length > 0) ?
                            <button className="btnCleanCart" type="filled" onClick={test.cleanCart}>
                                vaciar carro
                            </button> :
                            console.log('Tu carrito esta vacio')
                    }
                </div> 
                <div className="totalPedido">
                    {
                        (test.cartList.length > 0) ?
                        <p className="total">Total: $ {totalCart}</p> :
                        console.log('no tiene items en el carro')
                    }
                </div>
        </>
    )
}
export default Cart