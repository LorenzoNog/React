import { useContext } from 'react';
import  '../Css/CartWidget.css' ;
import { CartContext } from './CartContext';

const CartWidget = () => {
    const test = useContext(CartContext);
    return (
        <div className="carrito">
            <i className="fa fa-cart-shopping" ></i>
            <span className='qtyCart'>{test.cartList.length}</span>
        </div>
    )
}

export default CartWidget