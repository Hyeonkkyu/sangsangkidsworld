import React from 'react'
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';

const Header = () => {
    return (
        <header id='header'>
            <div className="menu">
                <h1>
                    <Link to='/'>
                        <img src={process.env.PUBLIC_URL + "/img/commons/logo.png"} alt="" />
                    </Link>
                </h1>
                <nav>
                    <NavMenu />
                </nav>
                <div>
                </div>
            </div>
        </header>
    )
}

export default Header