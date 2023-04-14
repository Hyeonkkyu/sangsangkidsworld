import React from 'react'
import { faqData, noticeData } from "../data/Info.js";

const FaqNotice = () => {

    return (
        <section className='faqNotice container'>
            <div className='contentBox'>
                <div className='titBox'>
                    <h2>공지사항</h2>
                    <a>더보기</a>
                </div>
                <div>
                    <ul className='descBox'>
                        {
                            noticeData.sort(function (a, b) { return b.id - a.id }).slice(0, 3).map((it, idx) => {
                                return (
                                    <li key={idx}>
                                        <a>
                                            {it.title}
                                        </a>
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
                    <span>더보기</span>
                </div>
                <div>
                    <ul className='descBox'>
                        {
                            faqData.slice(0, 3).map((it, idx) => {
                                return (
                                    <li key={idx}>
                                        <a>
                                            {it.title}
                                        </a>
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