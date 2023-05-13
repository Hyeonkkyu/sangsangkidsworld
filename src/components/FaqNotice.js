import React from 'react';
import { Link } from 'react-router-dom';
import { faqData, noticeData } from "../data/Info.js";

const FaqNotice = () => {

    return (
        <section className='faqNotice container'>
            <div className='contentBox'>
                <div className='titBox'>
                    <h2>공지사항</h2>
                    <Link to="/notice">
                        더보기
                    </Link>
                </div>
                <div>
                    <ul className='descBox'>
                        {
                            noticeData.sort(function (a, b) { return b.id - a.id }).slice(0, 3).map((it, idx) => {
                                return (
                                    <li key={idx}>
                                        <Link to={`/noticeContent/${it.id}`}>
                                            {it.title}
                                        </Link>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>
            <div className='contentBox'>
                <div className='titBox'>
                    <h2>자주 묻는 질문</h2>
                    <Link to="/faq">
                        더보기
                    </Link>
                </div>
                <div>
                    <ul className='descBox'>
                        {
                            faqData.slice(0, 3).map((it, idx) => {
                                return (
                                    <li key={idx}>
                                        <Link to={`/faqContent/${it.id}`}>
                                            {it.title}
                                        </Link>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>
        </section>
    )
}

export default FaqNotice