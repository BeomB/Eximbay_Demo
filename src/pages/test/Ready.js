import React, { useState } from 'react'
import Axios from 'axios';
import { Button } from 'react-bootstrap'

const Ready = () => {

  /// fgkey 값  
  const [fgkey, setFgkey] = useState()

  ///   결제 준비 요청 URL
  const url = "https://api-test.eximbay.com/v1/payments/ready";

  ///   헤더 값, Postman : Headers 값
  const Headers = {
    headers: {
      "Content-Type": 'application/json',
      "Authorization": 'Basic dGVzdF9DMkZBMUY1ODQ4OUMxNTg0MTk5Qjo='
    }
  };

  /// 결제 준비 값 "readyObject" (객체 형식)
  const [readyBody, setReadyBody] = useState({
    payment: {
      transaction_type: "PAYMENT",
      order_id: "SAMUEL_TEST_0428_1",
      currency: "KRW",
      amount: "106",
      lang: "EN",
      payment_method: "P101"
    },
    merchant: {
      mid: "2C233AB5EB"
    },
    buyer: {
      name: "samuel",
      email: "samuel@eximbay.com"
    },
    url: {
      return_url: "https://secureapi.test.eximbay.com/paytest/demo/returnurl.jsp",
      status_url: "https://secureapi.test.eximbay.com/paytest/demo/status.jsp"
    },
    settings: {
      display_type: "R",
      ostype: "M"
    }
  })


  const addFgkey = (fgkey) => 
  {
    readyBody.fgkey =fgkey
    return readyBody;
  }


  const payment = () => {
    addFgkey(fgkey)
    console.log(JSON.stringify(readyBody, null, 2))
    // 엑심베이 SDK를 불러오기 위한 eslint-disable-next-line 설정
    // eslint-disable-next-line 
    // EXIMBAY.request_pay(
    //   readyBody
    // );
  }


  /// 결제 준비, Postman : Send
  const ready = () => {
    Axios.post(url, readyBody, Headers)   // Axios를 통해 앞서 설정한 Url, readyBody, Headers설정을 받아서 Post 요청 진행
      .then(res => {
        setFgkey(res.data.fgkey)          // res는 axios 요청 이후 엑심베이에서 응답 주는 값, res.data.fgkey는 결제 준비 응닶 fgkey 값  
      })
      .catch(err => {                     // 에러 나면 에러 출력
        console.log(err.response.data.message);
      });
  }

  const valueHandler = (e) => {
    setReadyBody(
      {
        // ...readyBody,
        [e.target.name]: e.target.value
      }
    )
  }



  return (
    <div>
      <div className="main">
        <div className="form">
          <h2 className="title">결제 준비</h2>
          <b>POST</b>/v1/payments/ready<br/><br/>
          <div className="form-className">
            {/** transaction_type **/}
            <div className="form-floating">
              <select className="form-select" name={readyBody.payment.transaction_type} onChange={valueHandler}>
                <option value="PAYMENT">PAYMENT</option>
                <option value="READY">READY</option>
                <option value="CONFIRM">CONFRIM</option>
              </select>
              <label htmlFor="floatingInput">txnType</label>
            </div>

            {/** order_id **/}
            <div className="form-floating">
              <input type="text" className="form-control" placeholder="order_id" name={readyBody.payment.order_id} onChange={valueHandler} />
              <label htmlFor="floatingInput">order_id</label>
            </div>

            {/** currency **/}
            <div className="form-floating">
              <select className="form-select" name={readyBody.payment.currency} onChange={valueHandler}>
                <option value="KRW">KRW</option>
                <option value="USD">USD</option>
                <option value="MYR">MYR</option>
              </select>
              <label htmlFor="floatingInput">Currency</label>
            </div>

            {/** amount **/}
            <div className="form-floating">
              <input type="text" className="form-control" placeholder="amount" name={readyBody.payment.amount} onChange={valueHandler} />
              <label htmlFor="floatingInput">amount</label>
            </div>

            {/** lang **/}
            <div className="form-floating">
              <select className="form-select" name={readyBody.payment.lang} onChange={valueHandler}>
                <option value="EN">EN</option>
                <option value="KR">KR</option>
              </select>
              <label htmlFor="floatingInput">Lang</label>
            </div>

            {/** payment_method **/}
            <div className="form-floating">
              <select className="form-select" name={readyBody.payment.payment_method} onChange={valueHandler}>
                <option value="">VISA</option>
                <option value="">전체</option>
              </select>
              <label htmlFor="floatingInput">payment_method</label>
            </div>

            {/** mid **/}
            <div className="form-floating">
              <input type="text" className="form-control" placeholder="mid" name={readyBody.merchant.mid} onChange={valueHandler} />
              <label htmlFor="floatingInput">mid</label>
            </div>

            {/** email **/}
            <div className="form-floating">
              <input type="email" className="form-control" placeholder="email" name={readyBody.buyer.email} onChange={valueHandler} />
              <label htmlFor="floatingInput">email</label>
            </div>

            {/** return_url **/}
            <div className="form-floating">
              <input type="text" className="form-control" placeholder="return_url" name={readyBody.url.return_url} onChange={valueHandler} />
              <label htmlFor="floatingInput">return_url</label>
            </div>

            {/** status_url **/}
            <div className="form-floating">
              <input type="text" className="form-control" placeholder="status_url" name={readyBody.url.status_url} onChange={valueHandler} />
              <label htmlFor="floatingInput">status_url</label>
            </div>

            {/** fgkey **/}
            <div className="form-floating">
              <input type="text" className="form-control" id="fgkey_input" placeholder="fgkey" name={readyBody.fgkey} defaultValue={fgkey} />
              <label htmlFor="floatingInput">fgkey</label>
            </div>
            <br />
            <Button onClick={ready}>결제 준비</Button>
          </div>
        </div>



        <div className="preview">
          <pre className="json_preview">
            {JSON.stringify(readyBody, null, 2)}<br/><br/><br/><br/>
          </pre>
        </div>
      </div>

    </div>
  )
}

export default Ready