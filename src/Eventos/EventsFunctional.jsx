import React from "react";
import { useEffect } from "react";
import { useState } from "react";


const EventsFunctional = ({initial = 1, onAdd}) => {
    const [qty, setQty] = useState(0);
    
    useEffect(()=>{
        setQty(initial);
    },[ initial ]);
    
    const agregar = () => {
        const max = 4;
        if(qty <= max){
            setQty(qty + 1);
        }else{
            alert("No puedes agregar mas de 5 productos");
        }
    }

    const quitar = () => {
        const min = 1;
        if(qty >= min){
            setQty(qty - 1);
        }else{
            alert('No puedes agregar menos de 0 productos')
        }
    }

    return (
        <>
            <button className="btnContador" onClick={agregar}>+</button>
                <span className="counter"> {qty} </span>
            <button className="btnContador" onClick={quitar}>-</button>
            {
                qty  > 0 ?
                <button onClick={()=> onAdd(qty)} className='btnAddCart'>Agregar al carro</button> :
                <button disabled className="btnAddCart">Agregar al carro</button>
            }
        </>
    )
}
export default EventsFunctional