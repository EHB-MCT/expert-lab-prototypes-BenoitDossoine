import {Link} from "react-router-dom";
function Header(){
    return(
        <header>
            <ul className="nav">
                <li className="navElement">
                    <Link to="/">Home</Link>
                </li>
                <li className="navElement">
                    <Link to="/work">Work</Link>
                </li>
                <li className="navElement">
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;