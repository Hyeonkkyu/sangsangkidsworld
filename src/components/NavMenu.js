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
                    <li><a href="">경기 킨텍스</a></li>
                    <li><a href="">부산 벡스코</a></li>
                    <li><a href="">대구 엑스코</a></li>
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
                    <li><a href="">공지사항</a></li>
                    <li><a href="">자주 묻는 질문</a></li>
                    <li><a href="">1:1 문의</a></li>
                </ul>
            </li>
        </ul>
    )
}

export default NavMenu;