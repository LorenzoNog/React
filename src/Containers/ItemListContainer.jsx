import ItemList from '../Components/ItemList';
import CustomFetch from "../Utils/CustomFetch";
import { useState , useEffect } from 'react'
import { useParams } from 'react-router'
const products = require("../Utils/products.json");

const ItemListContainer = () => {
    const [productos , setProductos] = useState([])
    const { idCategory } = useParams()
    console.log(products)

    useEffect(()=>{
        if(!idCategory){
            console.log(products)
            CustomFetch(1000, products)
            .then(response => setProductos(response))
            .catch (error => console.log(error))
        }else{
            CustomFetch(1000, products.filter(item => item.categoryId === parseInt(idCategory)))
            .then(response => setProductos(response))
            .catch (error => console.log(error))
        }
    },[idCategory])  


    
    return (
        <>
            {
                <ItemList items={productos} />
            }
        </>
    );
}
export default ItemListContainer;