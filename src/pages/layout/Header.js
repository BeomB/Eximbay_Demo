import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg';

const Header = () => {

    return (
        <div className='header'>
            <div className="logo_area">
                <Link to="/"><img className="logo" src={logo}/></Link>
            </div>{ }
            <div className="nav_area" styled={{ marginLeft: "60px"}}>
                <div ><Link to="/demo/payment" className="link">결제</Link></div>
                <div><Link to="/demo/ready" className="link">결제 준비</Link></div>
                <div><Link to="/demo/confirm" className="link">결제 승인</Link></div>
                <div><Link to="/demo/retrieve" className="link">결제 조회</Link></div>
                <div><Link to="/demo/cancel" className="link">결제 취소</Link></div>
                <div><Link to="/demo/verify" className="link">결제 검증</Link></div>
                <div><Link to="/demo/capture" className="link">수동매입</Link></div>
            </div>
        </div>
    )
}
export default Header;



