import React from 'react';
import { Link } from 'react-router-dom';

const PlaceInfo = () => {
    return (
        <section className='placeInfo container'>
            <h2>키즈월드 행사장 이모저모</h2>
            <div>
                <div>
                    <img src={process.env.PUBLIC_URL + "/img/commons/bexco.png"} alt="" />
                    <div className='hoverBox'>
                        <h3>벡스코</h3>
                        <p>부산 해운대구 APEC로 55</p>
                        <Link to="/bexco">
                            자세히 보기
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + "/img/commons/exco.png"} alt="" />
                    <div className='hoverBox'>
                        <h3>엑스코</h3>
                        <p>대구 북구 엑스코로 10</p>
                        <Link to="/exco">
                            자세히 보기
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PlaceInfo