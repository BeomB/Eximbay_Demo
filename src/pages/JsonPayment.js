import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { Button } from 'react-bootstrap'


const JsonPayment = () => {






  const callSDK = () => {
    
    // 엑심베이 SDK를 불러오기 위한 eslint-disable-next-line 설정
    // eslint-disable-next-line
    EXIMBAY.request_pay(
      {
        "fgkey": "D0A71EBBF3C3654BE6592F823AE33C9BF60F97BFE3BD6C67A8EA7044A22FE4A9",
        "payment": {
          "transaction_type": "PAYMENT",
          "order_id": "123123213",
          "currency": "USD",
          "amount": "0.01",
          "lang": "EN"
        },
        "merchant": {
          "mid": "3474153615"
        },
        "buyer": {
          "name": "samuel",
          "email": "samuel@eximbay.com"
        },
        "url": {
          "return_url": "https://secureapi.test.eximbay.com/paytest/demo/returnurl.jsp",
          "status_url": "https://secureapi.test.eximbay.com/paytest/demo/status.jsp"
        }
      }
    );
  }

  return (
    <>
      <div className="main">
        <h2 className="title">결제</h2><br />
        {/* <Button style={{ marginRight: "10px" }} onClick={ready}>fgkey 생성</Button> */}
        <Button style={{ marginRight: "10px" }} onClick={callSDK}>SDK 호출</Button>
      </div>
    </>
  )
}
export default JsonPayment
