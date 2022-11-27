/* import { query, where ,collection } from '@firebase/firestore';
import { getFirestore, getDocs, getDoc, doc } from "firebase/firestore";

export const firestoreFetch = async (categoryId) => {
    let q;
    const queryDb = getFirestore()
    const queryCollection = collection(queryDb, 'productos'); 
    const queryFilter = query(queryCollection, where('categoryId', '==', categoryId));
    
    if(categoryId){
        q = queryFilter;
    }else{
        q = queryCollection;
    }
    const querySnapshot = await getDocs(q);
    const docs = querySnapshot.docs.map(doc => ({
        id: doc.id, 
        ...doc.data()
    }));
    return docs;
} 

export const firestoreFetchOne = async (idItem) => {
    const queryDb = getFirestore()
    const docRef = doc(queryDb, "productos", idItem);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return{
            id: idItem,
            ...docSnap.data()
        }
    } else {
        console.log("No se encontro ningun documento!");
    }
} */