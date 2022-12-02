import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import '../Css/NavBar.css';

const NavBar = () => {
    return (
        <>
        <nav>
            <h1 className="nameCafeteria">
                B∀chi
            </h1>
            <h2 className="especiality">
                Roastery
            </h2>
            <h3 className="subTitle">
                Pero primero, un café
            </h3>
        
            <ul className="list">
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