import { useState } from "react";

const EventsFunctional = () => {
    const [counter, setCounter] = useState(0);
    
    const agregar = () => {
        const max = 4;
        if(counter <= max){
            setCounter(counter + 1);
        }else{
            alert("No puedes agregar mas de 5 productos");
        }
    }

    const quitar = () => {
        const min = 1;
        if(counter >= min){
            setCounter(counter - 1);
        }else{
            alert('No puedes agregar menos de 0 productos')
        }
    }

    return (
        <>
            <button className="btnContador" onClick={agregar}>+</button>
                <span className="counter"> {counter} </span>
            <button className="btnContador" onClick={quitar}>-</button>
        </>
    )
}
export default EventsFunctional