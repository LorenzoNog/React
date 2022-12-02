import React from "react";
import { useContext } from "react"
import { CartContext } from "./CartContext"
import {Link} from 'react-router-dom'
import '../Css/Cart.css';
import { getFirestore, addDoc, serverTimestamp, collection } from "firebase/firestore";

const Cart = () => {
    const test = useContext(CartContext);
    const { deleteItem } = useContext(CartContext);
    const { clearCart } = useContext(CartContext);	
    const totalCart = test.cartList.reduce((prev,act)=> prev + act.qty * act.cost,0)
    const order = {
        buyer : {
            name : 'Leo Dicaprio',
            phone : '123456789',
            email : 'leoDiCapo@gmail.com'
        },
        date: serverTimestamp(),
        items : test.cartList.map(item => ({
            id: item.id,
            title: item.name,
            price: item.cost,
            qty : item.qty
        })),
        total : totalCart,
    } 

    const confirmBuy = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order)
            .then((response)=> {
                alert('Su compra ha sido realizada con éxito! Su número de orden: ' + response.id)
                clearCart()
            })
            .catch(error => console.log(error))  
        
    }


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
                                            <div className="coffeName">
                                                <span>{item.name}</span>  
                                            </div>
                                        <div className="coffeStats">
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
                    <h1 className="emptyCart">
                        No hay productos en el carrito 
                        <Link to='/' className='link'>
                            <button className="btnKeepBuying">Siga comprando!</button>
                        </Link>
                        
                    </h1>
                }
            </div>
            <div className="">
                {
                    (test.cartList.length > 0) ?
                        <button className="btnCleanCart" type="filled" onClick={test.clearCart}>
                            vaciar carro
                        </button> :
                        <></>
                }
            </div> 
            <div className="totalOrder">
                {
                    (test.cartList.length > 0) ?
                    <p className="total">Total: $ {totalCart}
                    <button className="btnBuy" onClick={confirmBuy}>Comprar</button> </p> 
                    :
                    console.log('no tiene items en el carrito')
                }
            </div>
        </>
    )
}
export default Cart