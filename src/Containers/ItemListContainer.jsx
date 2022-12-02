import ItemList from '../Components/ItemList';
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, getDocs, query, where, collection } from "firebase/firestore";


const ItemListContainer = () => {
    const [products , setProducts] = useState([])
    let { categoryId } = useParams()

    useEffect(()=>{
        const queryDb = getFirestore()
        const queryCollection = collection(queryDb, 'productos'); 
        if(categoryId){
            const queryFilter = query(queryCollection, where('categoryId', '==',  parseInt(categoryId)));
            getDocs(queryFilter)
                .then((res)=>setProducts(res.docs.map(doc => ({id:doc.id, ...doc.data()}))))
        }else{
            getDocs(queryCollection)
                .then((res)=>setProducts(res.docs.map(doc => ({id:doc.id, ...doc.data()}))))
        }
        
    },[categoryId])
    
    return (
        <>
            {
                <ItemList items={products} />
            }
        </>
    );
}
export default ItemListContainer;