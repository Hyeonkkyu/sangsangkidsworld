import React from 'react';
import BAXCOBANNER from "../components/BexcoBanner";

const bexco = () => {
    return (
        <section className='container'>
            <BAXCOBANNER />
            <div>
                <h4>한 눈에 보는 키즈월드</h4>
                <video width="800px" src='/video/bexco.mp4' muted controls></video>
            </div>
        </section>
    )
}

export default bexco