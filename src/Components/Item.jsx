import {Link} from 'react-router-dom'
import '../Css/Item.css'

const Item = (props) => {
    // console.log(props.img)
    return(
        <>
            <div className="productContainer">
                <div className="card">
                    <h2 className="title">
                        {props.name}
                    </h2>
                    <div className="img">
                        <img src={props.img} className='image' alt="imagen"/>
                    </div>
                    <div className="precio">
                        ${props.cost}
                    </div>
                    <div className="botones">
                        <button className="btn2">
                            <Link className='linkDetalle' to={`/detalle/${props.id}`}>
                                detalle
                            </Link>
                        </button>
                        <button className="btn">
                            Buy
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Item