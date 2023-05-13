import React from 'react';
import EXCOBANNER from "../components/ExcoBanner";
import "../css/conventionInfo.scss";

const Exco = () => {
    return (
        <section className='container convention'>
            <EXCOBANNER />
            <div className='contentBox'>
                <h4>한 눈에 보는 키즈월드</h4>
                <div className='videoBox'>
                    <video width="800px" src='/video/exco.mp4' muted controls></video>
                </div>
            </div>
        </section>
    )
}

export default Exco