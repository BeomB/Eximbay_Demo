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
import JsonPayment from './pages/JsonPayment'
import Boo from './pages/Boo'



const App = () => {
  return (
    <>
      <Header></Header>

      <Routes>                                              {/** Route를 이용하여 경로 별 Component 설정**/}
        <Route path='/test/' element={<Payment />} />
        <Route path='/test/ready' element={<Ready />} />         {/*결제 준비 API DEMO*/}
        <Route path='/test/confirm' element={<Confirm />} />     {/*결제 승인 API DEMO*/}
        <Route path='/test/verify' element={<Verify />} />       {/*결제 검증 API DEMO*/}
        <Route path='/test/retrieve' element={<Retrieve />} />   {/*결제 조회 API DEMO*/}
        <Route path='/test/cancel' element={<Cancel />} />       {/*결제 취소 API DEMO*/}
        <Route path='/test/capture' element={<Capture />} />     {/*수동 매입 API DEMO*/}
        <Route path='/demo/payment' element={<Payment />} />     {/*결제 API DEMO*/}
        <Route path='/test/payment' element={<Payment />} />     {/*결제 API DEMO*/}
        <Route path='/test/iframe' element={<Iframe />} />     {/*결제 API DEMO*/}
        <Route path='/test/sdk' element={<SdkButton />} />     {/*결제 API DEMO*/}
        <Route path='/test/json' element={<JsonPayment />} />     {/*결제 API DEMO*/}
        <Route path='/boo' element={<Boo />} />     {/*결제 API DEMO*/}

      </Routes>
    </>
  )
}

export default App