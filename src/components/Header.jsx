
import { Link } from "react-router-dom"
export default function Header(){
    return(
        <>
       <nav className="header-nav">
       <ul className="header-menu">
                <Link to="/Home">
                <li>Home</li>
                </Link>
                <Link to="/Oferta">
                <li>Oferta</li>
                </Link>
                <Link to="/Produtos">
                <li>Produto</li>
                </Link>
                </ul>
                </nav>
                </>
    )
}