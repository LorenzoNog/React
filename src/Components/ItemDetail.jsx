import React from "react"
import '../Css/ItemDetail.css';
import EventsFunctional from "../Eventos/EventsFunctional";

const ItemDetail = ({data}) => {
    console.log(data)
    return(
        <>
        {
            <div className="containerDetail">
                <div className="info">
                    <div className="imagen">
                        <img className="imgDetail" src={data.image} alt="Iced"/>  
                    </div>
                    <div className="datos">
                        <h2 className="nombre">{data.name}</h2>
                        <h5>{data.calories} calories</h5>
                    </div>
                </div>
                <div className="descripcion">
                    <div className="acercaDelCafe">
                        <div className="stars">
                            5 ★ item
                        </div>
                        <div className="cafe">
                            {data.desc}
                        </div>
                        <div className="calorias">
                            <p>110 calories, 10g sugar, 4g fat</p>
                        </div>
                    </div>
                    <div className="buttonAdd">
                        <EventsFunctional />
                    </div>
                </div>
            </div>
    }
        </>
    
    )
}
export default ItemDetail