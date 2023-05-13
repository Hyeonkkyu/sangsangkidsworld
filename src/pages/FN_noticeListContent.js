import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import { noticeData } from "../data/Info.js";
import "../css/faqNotice.scss";
import NOTICEBANNER from "../components/NoticeBanner";



const FN_noticeListContent = () => {

    const params = useParams();
    const contNum = params.contNum;
    const defaultData = {
        title: "로딩 중입니다...",
        desc: "로딩 중입니다..."
    };
    const [content, setContent] = useState(defaultData);

    useEffect(() => {
        noticeData.forEach((item) => {
            if (item.id === parseInt(contNum)) {
                setContent(item);
            }
        }
        );
    }, [contNum]);

    return (
        <section className='container FaqNotice'>
            <NOTICEBANNER />
            <div className='contentBox'>
                <div className='title'>{content.title}</div>
                <div className='desc'>{content.desc}</div>
            </div>
            <Link to="/notice" className='listBtn'>목록으로</Link>
        </section>
    )
}

export default FN_noticeListContent