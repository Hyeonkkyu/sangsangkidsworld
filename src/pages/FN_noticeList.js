import React from 'react'
import { Link } from 'react-router-dom';
import { noticeData } from "../data/Info.js";
import "../css/faqNotice.scss";
import NOTICEBANNER from "../components/NoticeBanner";

const FN_noticeList = () => {
    return (
        <section className='container FaqNotice'>
            <NOTICEBANNER />
            <ul>
                {
                    noticeData.map((it, idx) => {
                        return (
                            <li key={idx}>
                                <h3>
                                    <Link to={`/noticeContent/${it.id}`}>
                                       {it.title}
                                    </Link>
                                </h3>
                            </li>
                        )
                    })
                }
            </ul>

        </section>
    )
}

export default FN_noticeList