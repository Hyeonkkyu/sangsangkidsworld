import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header id='header'>
            <h1>
                <Link to='/'>
                    <img src={process.env.PUBLIC_URL + "/img/commons/logo.png"} alt="" />
                </Link>
            </h1>
            <nav>
                <ul className='menu'>
                    <li>이용 정보</li>
                    <li>여기저기 키즈월드</li>
                    <li>안내 사항</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header