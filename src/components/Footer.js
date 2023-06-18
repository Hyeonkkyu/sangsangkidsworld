import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer">
      <div className='innerBox'>
        <div className='footerInfoBox'>
          <div className='infoDesc'>
            <ul className='left'>
              <li>상호 : 상상체험 키즈월드</li>
              <li>대표 : 홍길동</li>
              <li>사업자등록번호 : 000-00-00000</li>
            </ul>
            <ul className='right'>
              <li>부산 해운대구 APEC로 30<br />
                벡스코 제2전시장 3층 5B ~ 5F</li>
              <li>070.4801.6034</li>
            </ul>
            <ul className='right'>
              <li>대구 북구 엑스코로 10<br />
                엑스코 서관 1층 3홀</li>
              <li>070.4801.4182</li>
            </ul>
          </div>
          <div className='copyDesc'>
            <p>Copyright &copy; 2010 SangSang Kidsworld. All Rights Reserved</p>
          </div>
        </div>
        <div className='footerLogoBox'>
          <Link to='/'>
            <img src={process.env.PUBLIC_URL + "/img/commons/footer_logo.png"} alt="" />
          </Link>
        </div>
      </div>
    </footer >
  )
}

export default Footer