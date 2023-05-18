import React, { useState } from 'react'
import Axios from 'axios';
import { Button } from 'react-bootstrap'

const Cancel = () => {

  /// 결과 값  
  const [result, setResult] = useState()

  const [cancelKey, setCancelKey] = useState("1849705C6420230406000005")

  ///   결제 준비 요청 URL
  const url = `https://api-test.eximbay.com/v1/payments/${cancelKey}/cancel`;

  ///   헤더 값, Postman : Headers 값
  const Headers = {
    headers: {
      "Content-Type": 'application/json',
      "Authorization": 'Basic dGVzdF9DMkZBMUY1ODQ4OUMxNTg0MTk5Qjo='
    }
  };

  /// 결제 준비 값 "readyObject" (객체 형식)
  const [cancelBody, setCancelBody] = useState({

    "mid": "1849705C64",
    "refund": {
      "refund_type": "F",
      "refund_amount": "1",
      "refund_id": "samuel_refund_test_1",
      "reason": "관리자에 의한 취소"
    },
    "payment": {
      "order_id": "samuel_test_1",
      "currency": "USD",
      "amount": "1",
      "balance": "1",
      "lang": "EN"
    }

  })


  /// 결제 준비, Postman : Send
  const cancel = () => {
    Axios.post(url, cancelBody, Headers)   // Axios를 통해 앞서 설정한 Url, cancelBody, Headers설정을 받아서 Post 요청 진행
      .then(res => {
        setResult(res.data)
      })
      .catch(err => {                     // 에러 나면 에러 출력
        console.log(err.response.data.message);
      });
  }

  const valueHandler = (e) => {
    setCancelBody(
      {
        // ...cancelBody,
        [e.target.name]: e.target.value
      }
    )
  }



  return (
    <div>
      <div className="main">
        <div className="form">
          <h2 className="title">결제 취소</h2>
          <b>POST</b>/v1/payments/<b>{cancelKey}</b>/cancel<br /><br />
          <div className="form-className">
            <br />
            <Button onClick={cancel}>결제 취소</Button>
          </div>
        </div>

        <div className="preview">
          <pre className="json_preview">
            {JSON.stringify(cancelBody, null, 2)}<br /><br /><br /><br />
          </pre>

          <pre className="json_preview">
            {JSON.stringify(result, null, 2)}<br /><br /><br /><br />
          </pre>
        </div>
      </div>

    </div>
  )
}

export default Cancel