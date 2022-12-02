import { useContext } from 'react';
import  '../Css/CartWidget.css' ;
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const test = useContext(CartContext);
    return (
        <div className="cart">
            <Link className='link' to="/cart">
                <i className="fa fa-cart-shopping" ></i>
            </Link>
            <span className='qtyCart'>{test.cartList.length}</span>
        </div>
    )
}

export default CartWidget