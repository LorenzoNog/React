import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import '../Css/NavBar.css';

const NavBar = () => {
    return (
        <>
        <nav>
            <div className="titulo">
                <h1 className="nombreCafeteria">
                    B∀chi
                </h1>
            </div>
            <div className="titulo">
                <h2 className="h2">
                    Roastery
                </h2>
            </div>
            <div className="titulo">
                <h3 className="subTitle">
                    Pero primero, un café
                </h3>
            </div>
            <ul className="lista">
                <li className="itemList">
                    <Link className="link" to='/'>
                        Home
                    </Link>
                </li>
                |
                <li className="itemList">
                    <Link className="link" to='/category/1'>
                        Cafés calientes
                    </Link>
                </li>
                |
                <li className="itemList">
                    <Link className="link" to='/category/2'>
                        Bebidas frías
                    </Link>
                </li>
                |
                <li className="itemList">
                    <Link className="link" to='/category/3'>
                        Bakery
                    </Link>
                </li>
            </ul>
        </nav>
        <CartWidget />
        </>
    )
}

export default NavBar;