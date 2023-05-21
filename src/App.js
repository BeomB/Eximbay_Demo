import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'      ///react-router-dom을 import
import Home from './pages/Home'
import Cancel from './pages/Cancel'
import Ready from './pages/Ready'
import Capture from './pages/Capture'
import Confirm from './pages/Confirm'
import Verify from './pages/Verify'
import Retrieve from './pages/Retrieve'
import Header from './pages/layout/Header'

import Payment from './pages/Payment'
import Iframe from './pages/Iframe'
import SdkButton from './pages/SdkButton'



const App = () => {
  return (
    <>
      <Header></Header>

      <Routes>                                              {/** Route를 이용하여 경로 별 Component 설정**/}
        <Route path='/demo/' element={<Payment />} />
        <Route path='/demo/ready' element={<Ready />} />         {/*결제 준비 API DEMO*/}
        <Route path='/demo/confirm' element={<Confirm />} />     {/*결제 승인 API DEMO*/}
        <Route path='/demo/verify' element={<Verify />} />       {/*결제 검증 API DEMO*/}
        <Route path='/demo/retrieve' element={<Retrieve />} />   {/*결제 조회 API DEMO*/}
        <Route path='/demo/cancel' element={<Cancel />} />       {/*결제 취소 API DEMO*/}
        <Route path='/demo/capture' element={<Capture />} />     {/*수동 매입 API DEMO*/}
        <Route path='/demo/payment' element={<Payment />} />     {/*결제 API DEMO*/}
        <Route path='/demo/iframe' element={<Iframe />} />     {/*결제 API DEMO*/}
        <Route path='/demo/sdk' element={<SdkButton />} />     {/*결제 API DEMO*/}
      </Routes>
    </>
  )
}

export default App