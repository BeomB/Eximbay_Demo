import React, { useState } from 'react'
import Axios from 'axios';
import { Button } from 'react-bootstrap'

const RealCapture = () => {
  

   /// 결과 값  
   const [result, setResult] = useState()

  const [captureKey, setCaptureKey] = useState("3727174F3020230405000006")

  ///   결제 준비 요청 URL
  const url = `https://api-test.eximbay.com/v1/payments/${captureKey}/capture`;

  ///   헤더 값, Postman : Headers 값
  const Headers = {
    headers: {
      "Content-Type": 'application/json',
      "Authorization": 'Basic dGVzdF9DMkZBMUY1ODQ4OUMxNTg0MTk5Qjo='
    }
  };

  /// 결제 준비 값 "readyObject" (객체 형식)
  const [captureBody, setCaptureBody] = useState({
    "mid": "2B0AF30BE0",
    "payment": {
      "order_id": "SP230315IEBPZNYLDS3",
      "currency": "KR",
      "amount": "1",
      "lang": "EN"
    }
  }
  )


  /// 결제 준비, Postman : Send
  const capture = () => {
    Axios.post(url, captureBody, Headers)   // Axios를 통해 앞서 설정한 Url, captureBody, Headers설정을 받아서 Post 요청 진행
      .then(res => {
        setResult(res.data)
      })
      .catch(err => {                     // 에러 나면 에러 출력
        console.log(err.response.data.message);
      });
  }

  const valueHandler = (e) => {
    setCaptureBody(
      {
        // ...captureBody,
        [e.target.name]: e.target.value
      }
    )
  }



  return (
    <div>
      <div className="main">
        <div className="form">
          <h2 className="title">수동 매입</h2>
          <b>POST</b>/v1/payments/<b>{captureKey}</b>/capture<br /><br />
          <div className="form-className">
        
            <br />
            <Button onClick={capture}>수동 매입</Button>
          </div>
        </div>

        <div className="preview">
          <pre className="json_preview">
            {JSON.stringify(captureBody, null, 2)}<br /><br /><br /><br />
          </pre>

          <pre className="json_preview">
            {JSON.stringify(result, null, 2)}<br /><br /><br /><br />
          </pre>
        </div>
      </div>

    </div>
  )
}

export default RealCapture