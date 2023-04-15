import React from 'react'

const FloatingBtn = () => {
    return (
        <div id='floatingBtn'>
            <div className='btnBox'>
                <img src={process.env.PUBLIC_URL + "/img/commons/floatingbtn_kakao.png"} alt="" />
                <a>
                    <h2>
                        1:1 채팅상담<br/>바로가기
                    </h2>
                </a>
            </div>
            <div className='btnBox'>
                <img src={process.env.PUBLIC_URL + "/img/commons/floatingbtn_pay.png"} alt="" />
                <a>
                    <h2>
                        티켓 구매<br/>바로가기
                    </h2>
                </a>
            </div>
        </div>
    )
}

export default FloatingBtn