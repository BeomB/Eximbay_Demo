import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { Button } from 'react-bootstrap'

const SdkButton = () => {
  
  /// 결제 준비, Postman : Send

      const callSDK = () => {
        // 엑심베이 SDK를 불러오기 위한 eslint-disable-next-line 설정
        // eslint-disable-next-line
        EXIMBAY.request_pay(
          {
            "fgkey": "647158FFE4092B3687E79BF843680B909C451D363E4015A417F28D73092E93D8",
            "payment": {
              "transaction_type": "PAYMENT",
              "order_id": "KOBE_TEST",
              "currency": "KRW",
              "amount": "100",
              "lang": "KR"
            },
            "merchant": {
              "mid": "1849705C64"
            },
            "url": {
              "return_url": "https://secureapi.test.eximbay.com/paytest/demo/returnurl.jsp",
              "status_url": "https://secureapi.test.eximbay.com/paytest/demo/status.jsp"
            },
            "buyer": {
              "name": "kobe",
              "email": "kobe123@eximbay.com"
            },
            "tax": {},
            "other_param": {
              "param1": "param1",
              "param2": "param2"
            },
            "product": [
              {
                "name": "test_product",
                "quantity": "1",
                "unit_price": "500",
                "link": "www.kopenmarket.com"
              }
            ],
            "surcharge": [
              {}
            ],
            "settings": {}
          }
        );
      }
    


  return (
    <div>
      <Button onClick={callSDK}>SDK 호출</Button>
    </div>
  )
}
export default SdkButton











{/* <div className="accordion mb-2" >
<div className="accordion-item">
  <h2 className="accordion-header" id="headingPayment">
    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePayment" aria-expanded="true" aria-controls="collapsePayment">
      Payment
    </button>
  </h2>
  <div id="collapsePayment" className="accordion-collapse collapse show" aria-labelledby="headingPayment" data-bs-parent="#accordionPayment">
    <div className="accordion-body">

    </div>
  </div>
</div>
</div> */}