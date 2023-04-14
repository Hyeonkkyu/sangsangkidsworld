import React from 'react'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='container'>
        <div className='leftInfo'>
          <div className='footerInfo'>
            <address>
              <ul>
                <li>상호 : 조구만</li>
                <li>대표 : 김병준</li>
                <li>주소 : 서울시 마포구 월드컵북로5나길 9-6, 2층</li>
                <li>사업자등록번호 : 160-81-02444</li>
                <li>통신판매업신고증 : 제2022-서울마포-2050호</li>
              </ul>
              <ul>
                <li>E-mail : <a href="mailto:joguman.studio@gmail.com">joguman.studio@gmail.com</a></li>
                <li>안전관리책임자 : 김병준</li>
              </ul>
            </address>
          </div>
          <div className='copyRight'>
            <p>Copyright &copy; 2010 SangSang Kidsworld. All Rights Reserved</p>
          </div>
        </div>
        <div className='rightLogo'>
          <img src={process.env.PUBLIC_URL + "/img/commons/img_logo.png"} alt="" />
        </div>
      </div>
    </footer>
  )
}

export default Footer