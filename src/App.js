import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'      ///react-router-dom을 import
import Header from './pages/layout/Header'
import Cancel from './pages/test/Cancel'
import Ready from './pages/test/Ready'
import Capture from './pages/test/Capture'
import Confirm from './pages/test/Confirm'
import Verify from './pages/test/Verify'
import Retrieve from './pages/test/Retrieve'
import Payment from './pages/test/Payment'

import RealCancel from './pages/real/RealCancel'
import RealReady from './pages/real/RealReady'
import RealCapture from './pages/real/RealCapture'
import RealConfirm from './pages/real/RealConfirm'
import RealVerify from './pages/real/RealVerify'
import RealRetrieve from './pages/real/RealRetrieve'
import RealPayment from './pages/real/RealPayment'




const App = () => {
  return (
    <>
      <Header></Header>

      <Routes>                                              {/** Route를 이용하여 경로 별 Component 설정**/}
    
        <Route path='/test/ready' element={<Ready />} />         {/*결제 준비 API DEMO*/}
        <Route path='/test/confirm' element={<Confirm />} />     {/*결제 승인 API DEMO*/}
        <Route path='/test/verify' element={<Verify />} />       {/*결제 검증 API DEMO*/}
        <Route path='/test/retrieve' element={<Retrieve />} />   {/*결제 조회 API DEMO*/}
        <Route path='/test/cancel' element={<Cancel />} />       {/*결제 취소 API DEMO*/}
        <Route path='/test/capture' element={<Capture />} />     {/*수동 매입 API DEMO*/}
        <Route path='/test/payment' element={<Payment />} />     {/*결제 API DEMO*/}


        
        <Route path='/real/ready'    element={<RealReady />} />         {/*결제 준비 API DEMO*/}
        <Route path='/real/confirm'  element={<RealConfirm />} />     {/*결제 승인 API DEMO*/}
        <Route path='/real/verify'   element={<RealVerify />} />       {/*결제 검증 API DEMO*/}
        <Route path='/real/retrieve' element={<RealRetrieve />} />   {/*결제 조회 API DEMO*/}
        <Route path='/real/cancel'   element={<RealCancel/>} />       {/*결제 취소 API DEMO*/}
        <Route path='/real/capture'  element={<RealCapture />} />     {/*수동 매입 API DEMO*/}
        <Route path='/real/payment'  element={<RealPayment />} />     {/*결제 API DEMO*/}
        
        
        
      </Routes>
    </>
  )
}

export default App