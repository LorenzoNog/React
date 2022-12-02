import { createContext, useState} from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item,qty) => {
        const exists = cartList.find(product => product.id === item.id)
        if(exists){
            setCartList(
                cartList.map((product)=>{
                    if(product.id === item.id){
                        return {...exists, qty : exists.qty + qty}
                    }else{
                        return item
                    }
                })
            )
        }else{
            setCartList([...cartList, {...item, qty:qty}])
        }
    }

    const clearCart = () => {
        setCartList([]);
    }

    const deleteItem = (id) => {
        setCartList(cartList.filter(item => item.id !== id))
    }

    return(

        <CartContext.Provider value={{cartList,addToCart,clearCart,deleteItem}}>
            {children}
        </CartContext.Provider>
        
    )
}

export default CartContextProvider