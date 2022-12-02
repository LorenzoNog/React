import { Link } from 'react-router-dom'
import '../Css/Item.css'

const Item = (props) => {
    return(
        <>
            <div className="productContainer" data-aos="fade-down">
                <div className="card">
                    <h2 className="title">
                        {props.name}
                    </h2>
                    <div className="img">
                        <img src={props.img} className='image' alt="imagen"/>
                    </div>
                    <div className="price">
                        ${props.cost}
                    </div>
                    <div className="buttons">
                        <button className="btn">
                            <Link className='linkBtn' to={`/detalle/${props.id}`}>
                                Buy
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Item