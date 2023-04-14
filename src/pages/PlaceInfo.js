import React from 'react'

const PlaceInfo = () => {
    return (
        <section className='placeInfo container'>
            <h2>키즈월드 행사장 이모저모</h2>
            <div>
                <div>
                    <img src={process.env.PUBLIC_URL + "/img/commons/kintex.png"} alt="" />
                    <div className='hoverBox'>
                        <h3>킨텍스</h3>
                        <p>경기 고양시 일산서구 킨텍스로 217-60</p>
                        <a>자세히 보기</a>
                    </div>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + "/img/commons/bexco.png"} alt="" />
                    <div className='hoverBox'>
                        <h3>벡스코</h3>
                        <p>부산 해운대구 APEC로 55</p>
                        <a>자세히 보기</a>
                    </div>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + "/img/commons/exco.png"} alt="" />
                    <div className='hoverBox'>
                        <h3>엑스코</h3>
                        <p>대구 북구 엑스코로 10</p>
                        <a>자세히 보기</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PlaceInfo