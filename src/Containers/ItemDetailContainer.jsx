import React,{ useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../Components/ItemDetail"
import { getFirestore, getDoc, doc} from "firebase/firestore";

const ItemDetailContainer = () => {
    const [detalle,setDetalle] = useState([])

    let { idItem } = useParams()   

    useEffect(()=>{;
        const queryDb = getFirestore()
        const queryDoc = doc(queryDb, "productos", idItem);
        getDoc(queryDoc)
            .then(res => setDetalle({id:res.id, ...res.data()}))
            .catch(err => console.log(err))
    },[idItem])

    return(
        <ItemDetail data={detalle} />
    )
} 
export default ItemDetailContainer