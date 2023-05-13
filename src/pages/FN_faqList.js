import React from 'react'
import { Link } from 'react-router-dom';
import { faqData } from "../data/Info.js";
import "../css/faqNotice.scss";
import FAQBANNER from "../components/FaqBanner";

const FN_faqList = () => {
    return (
        <section className='container FaqNotice'>
            <FAQBANNER />
            <ul>
                {
                    faqData.map((it, idx) => {
                        return (
                            <li key={idx}>
                                <h3>
                                    <Link to={`/faqContent/${it.id}`}>
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

export default FN_faqList