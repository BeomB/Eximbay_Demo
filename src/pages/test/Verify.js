import React, { useState } from 'react'
import Axios from 'axios';
import { Button } from 'react-bootstrap'

const Verify = () => {

  /// 결과 값  
  const [result, setResult] = useState()

  ///   결제 준비 요청 URL
  const url = "https://api-test.eximbay.com/v1/payments/verify";

  ///   헤더 값, Postman : Headers 값
  const Headers = {
    headers: {
      "Content-Type": 'application/json',
      "Authorization": 'Basic dGVzdF9DMkZBMUY1ODQ4OUMxNTg0MTk5Qjo='
    }
  };

  /// 결제 준비 값 "readyObject" (객체 형식)
  const [verifyBody, setVerifyBody] = useState(
    {
      "data": "cur=KRW&dm_reject=&ver=230&mid=2C233AB5EB&amt=4650&dm_decision=&eci=02&param3=OPENAPI&resmsg=Success.&param1=SP230419YWYIZTYYVR&rescode=0000&param2=40476937&cavv=kJkBAkV5kwAAAABkhAEgdAAAAAA=&ref=SP230419YWYIZTYYVR&xid=9c7d9a6b-c0ca-4076-acac-0f03554799a8&fgkey=D45C82E34CF149EE48927B42F60EC0A73B8A3E24BFF8FD5F1BF8530FEC6D13E8&dm_review=&txntype=PAYER_AUTH&payerauthid=2023041913144025AFB7DFDA&email=robin9202@naver.com&"
    }
  )

  /// 결제 준비, Postman : Send
  const verify = () => {
    Axios.post(url, verifyBody, Headers)   // Axios를 통해 앞서 설정한 Url, verifyBody, Headers설정을 받아서 Post 요청 진행
      .then(res => {

      })
      .catch(err => {                     // 에러 나면 에러 출력
        console.log(err.response.data.message);
      });
  }

  const valueHandler = (e) => {
    setVerifyBody(
      {
        // ...verifyBody,
        [e.target.name]: e.target.value
      }
    )
  }



  return (
    <div>
      <div className="main">
        <div className="form">
          <h2 className="title">결제 검증</h2>
          <b>POST</b>/v1/payments/verify<br /><br />
          <div className="form-className">

            <br />
            <Button onClick={verify}>결제 준비</Button>
          </div>
        </div>



        <div className="preview">
          <pre className="json_preview">
            {JSON.stringify(verifyBody, null, 2)}<br /><br /><br /><br />
          </pre>

          <pre className="json_preview">
            {JSON.stringify(result, null, 2)}<br /><br /><br /><br />
          </pre>s
        </div>

        
      </div>

    </div>
  )
}

export default Verify