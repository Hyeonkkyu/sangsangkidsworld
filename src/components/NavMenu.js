import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const NAVLINK = [
    { content: "여기저기 키즈월드", link: "/" },
    { content: "이용 정보", link: "/" },
    { content: "안내 사항", link: "/" }
]

const NavMenu = () => {
    return (
        // <ul className='gnb'>
        //     {
        //         NAVLINK.map((it, idx) => {
        //             return (
        //                 <li key={idx}><NavLink to={it.link}>{it.content}</NavLink>
        //                     <ul className='sMenu'>
        //                         <li></li>
        //                     </ul>
        //                 </li>
        //             )
        //         })
        //     }

        // </ul>
        <ul>
            <li>
                <a href="">여기저기 키즈월드</a>
                <ul className='smenu'>
                    <li>
                        <Link to="/bexco">
                            부산 벡스코
                        </Link>
                    </li>
                    <li>
                        <Link to="/exco">
                        대구 엑스코
                        </Link>
                    </li>
                </ul>
            </li>
            <li>
                <a href="">이용 정보</a>
                <ul className='smenu'>
                    <li><a href="">이용 요금</a></li>
                    <li><a href="">이용 안내</a></li>
                </ul>
            </li>
            <li>
                <a href="">안내 사항</a>
                <ul className='smenu'>
                    <li>
                        <Link to="/notice">
                            공지사항
                        </Link>
                    </li>
                    <li>
                        <Link to="/faq">
                            자주 묻는 질문
                        </Link>
                    </li>
                    <li><a href="">1:1 문의</a></li>
                </ul>
            </li>
        </ul>
    )
}

export default NavMenu;