import React,{ useState,useEffect } from "react"
import { useParams } from "react-router"
import CustomFetch from "../Utils/CustomFetch"
import ItemDetail from "../Components/ItemDetail"
const products  = require("../Utils/products.json")

const ItemDetailContainer = () => {
    const [detalle,setDetalle] = useState([])

    let {idItem} = useParams()

    useEffect(()=>{
        CustomFetch(1000, products.find(item => { 
            return item.id === parseInt(idItem)
        }))
        .then(response => setDetalle(response))
        .catch (error => console.log(error))
    },[ idItem ])

    return(
        <ItemDetail data={detalle} />
    )
} 
export default ItemDetailContainer