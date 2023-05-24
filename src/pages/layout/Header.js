import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg';

const Header = () => {

    return (
        <div className='header'>
            {/* <div className="logo_area">
                <Link to="/"><img className="logo" src={logo} /></Link>
            </div>{ } */}
            <div className="nav_area" >
                <div className="test_header">
                    <div ><Link to="/test/payment" className="test_link">결제</Link></div>
                    <div><Link to="/test/cancel" className="test_link">결제 취소</Link></div>
                    <div><Link to="/test/confirm" className="test_link">결제 승인</Link></div>
                    <div><Link to="/test/retrieve" className="test_link">결제 조회</Link></div>
                    <div><Link to="/test/verify" className="test_link">결제 검증</Link></div>
                    <div><Link to="/test/capture" className="test_link">수동매입</Link></div>
                </div>

                <div className="real_header">
                    <div><Link to="/real/payment" className="real_link">결제</Link></div>
                    <div><Link to="/real/cancel" className="real_link">결제 취소</Link></div>
                    <div><Link to="/real/confirm" className="real_link">결제 승인</Link></div>
                    <div><Link to="/real/retrieve" className="real_link">결제 조회</Link></div>
                    <div><Link to="/real/verify" className="real_link">결제 검증</Link></div>
                    <div><Link to="/real/capture" className="real_link">수동매입</Link></div>
                </div>
            </div>
        </div>
    )
}
export default Header;



