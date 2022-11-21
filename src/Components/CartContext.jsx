import { createContext, useState} from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item,qty) => {
        const existe = cartList.find(product => product.id === item.id)
        if(existe){
            setCartList(
                cartList.map((product)=>{
                    if(product.id === item.id){
                        return {...existe, qty : existe.qty + qty}
                    }else{
                        return item
                    }
                })
            )
        }else{
            setCartList([...cartList, {...item, qty:qty}])
        }
    }

    const cleanCart = () => {
        setCartList([]);
    }

    const deleteItem = (id) => {
        setCartList(cartList.filter(item => item.id !== id))
    }

    return(

        <CartContext.Provider value={{cartList,addToCart,cleanCart,deleteItem}}>
            {children}
        </CartContext.Provider>
        
    )
}

export default CartContextProvider