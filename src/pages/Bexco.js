import React from 'react';
import BEXCOBANNER from "../components/BexcoBanner";
import "../css/conventionInfo.scss";

const bexco = () => {
    return (
        <section className='container convention'>
            <BEXCOBANNER />
            <div className='contentBox'>
                {/* <h4>한 눈에 보는 키즈월드</h4> */}
                <div className='videoBox'>
                    <video width="800px" src='/video/bexco.mp4' muted controls></video>
                </div>
            </div>
        </section>
    )
}

export default bexco