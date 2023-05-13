import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import { faqData } from "../data/Info.js";
import "../css/faqNotice.scss";
import FAQBANNER from "../components/FaqBanner";



const FN_faqListContent = () => {

    const params = useParams();
    const contNum = params.contNum;
    const defaultData = {
        title: "로딩 중입니다...",
        desc: "로딩 중입니다..."
    };
    const [content, setContent] = useState(defaultData);

    useEffect(() => {
        faqData.forEach((item) => {
            if (item.id === parseInt(contNum)) {
                setContent(item);
            }
        }
        );
    }, [contNum]);

    return (
        <section className='container FaqNotice'>
            <FAQBANNER />
            <div className='contentBox'>
                <div className='title'>Q. {content.title}</div>
                <div className='desc'>A. {content.desc}</div>
            </div>
            <Link to="/faq" className='listBtn'>목록으로</Link>
        </section>
    )
}

export default FN_faqListContent