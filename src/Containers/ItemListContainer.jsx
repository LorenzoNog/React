import ItemList from '../Components/ItemList';
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, getDocs, query, where, collection } from "firebase/firestore";


const ItemListContainer = () => {
    const [productos , setProductos] = useState([])
    let { categoryId } = useParams()

    useEffect(()=>{
        const queryDb = getFirestore()
        const queryCollection = collection(queryDb, 'productos'); 
        if(categoryId){
            const queryFilter = query(queryCollection, where('categoryId', '==',  categoryId));
            getDocs(queryFilter)
                .then((res)=>setProductos(res.docs.map(doc => ({id:doc.id, ...doc.data()}))))
        }else{
            getDocs(queryCollection)
                .then((res)=>setProductos(res.docs.map(doc => ({id:doc.id, ...doc.data()}))))
        }
        
    },[categoryId])
    
    return (
        <>
            {
                <ItemList items={productos} />
            }
        </>
    );
}
export default ItemListContainer;