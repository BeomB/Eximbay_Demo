import React from 'react'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Wrapper>
    <h1 style={{textAlign : 'center'}}>DEMO PAGE</h1>
    {/* <Button><Link to="/ready">결제 준비</Link></Button>
    <div><Link to="/confirm">결제 진행</Link></div>
    <div><Link to="/retrieve">결제 조회</Link></div>
    <div><Link to="/cancel">결제 취소</Link></div>
    <div><Link to="/verify">결제 검증</Link></div>
    <div><Link to="/payment">결제</Link></div>
    <Button>Button</Button>     */}
    </Wrapper>
    
    
  )
}

export default Home;


const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`

const Header = styled.div`
  font-size: 40pt;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "SimKyungha";
`

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Title = styled.div`
  font-size: 30pt;
  margin-top: 40px;
  font-family: "SimKyungha";
`

const LogoImage = styled.div`
  margin-top: 10px;
`

const Desc = styled.div`
  font-size: 20pt;
  margin-top: 20px;
  font-family: "SimKyungha";
`