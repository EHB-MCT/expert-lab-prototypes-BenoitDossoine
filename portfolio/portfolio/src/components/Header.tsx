import {Link} from "react-router-dom";
import {motion} from 'framer-motion';
import {useState} from 'react';
function Header(){
    
    return(
        <header>
            <ul className="nav">
                <li className="navElement">
                    <p className='navExtraText'><span>Get to</span> know me!</p>
                    <Link to="/">
                        <p className="navLink">
                            Home
                        </p>
                    </Link>
                </li>
                <li className="navElement">
                    <p className='navExtraText'>Discover <span>my latest</span> projects!</p>
                    <Link to="/work">
                        <p className='navLink'>
                            Work
                        </p>
                    </Link>
                </li>
                <li className="navElement">
                    <p className='navExtraText'>Get in touch <span>with me!</span></p>
                    <Link to="/about">
                        <p className="navLink">
                            About
                        </p>
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;