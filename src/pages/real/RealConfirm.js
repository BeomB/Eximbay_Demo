import React, { useState } from 'react'
import Axios from 'axios';
import { Button } from 'react-bootstrap'

const RealConfirm = () => {

  /// fgkey 값  
  const [fgkey, setFgkey] = useState();

  ///   결제 준비 요청 URL
  const requestUrl = "https://api.eximbay.com/v1/payments/ready";

  ///   헤더 값, Postman : Headers 값
  const Headers = {
    headers: {
      "Content-Type": 'application/json',
      "Authorization": 'Basic bGl2ZV8zMEQ1MTA1RDcyMTkzRURDNkIwRjo='
    }
  };


  const [payment, setPayment] = useState({
    transaction_type: "PAYMENT",
    order_id: "SAMUEL_TEST_0428_1",
    currency: "KRW",
    amount: "106",
    lang: "EN",
    payment_method: "P101"
  })

  const [merchant, setMerchant] = useState({
    mid: "2C233AB5EB"
  })


  const [buyer, setBuyer] = useState({
    name: "samuel",
    email: "samuel@eximbay.com"
  })


  const [url, setUrl] = useState({
    return_url: "https://secureapi.test.eximbay.com/paytest/demo/returnurl.jsp",
    status_url: "https://secureapi.test.eximbay.com/paytest/demo/status.jsp"
  })

  const [settings, setSettings] = useState({
    display_type: "R",
    ostype: "M"
  })

  /// 결제 준비 값 "readyObject" (객체 형식)
  const [confirmBody, setConfirmBody] = useState({
    payment,
    merchant,
    buyer,
    url,
    settings
  })



  const addFgkey = (fgkey) => {
    confirmBody.fgkey = fgkey
    return confirmBody;
  }


  const confirm = () => {
    addFgkey(fgkey)
    console.log(payment)
    // 엑심베이 SDK를 불러오기 위한 eslint-disable-next-line 설정
    // eslint-disable-next-line 
    EXIMBAY.request_pay(
      confirmBody
    );
  }





  /// 결제 준비, Postman : Send
  const ready = () => {
    setConfirmBody(
      {
        payment,
        merchant,
        buyer,
        url,
        settings
      }
    )
    Axios.post(requestUrl, confirmBody, Headers)   // Axios를 통해 앞서 설정한 Url, confirmBody, Headers설정을 받아서 Post 요청 진행
      .then(res => {
        
        // setFgkey(res.data.fgkey)          // res는 axios 요청 이후 엑심베이에서 응답 주는 값, res.data.fgkey는 결제 준비 응닶 fgkey 값  
      })
      .catch(err => {                     // 에러 나면 에러 출력
        console.log(err.response.data.message);
      });
  }

  const paymentValueHandler = (e) => {
    setPayment(
      {
        ...payment,
        [e.target.name]: e.target.value
      }
    )
  }

  const merchantValueHandler = (e) => {
    setMerchant(
      {
        ...merchant,
        [e.target.name]: e.target.value
      }
    )
  }


  const buyerValueHandler = (e) => {
    setBuyer(
      {
        ...buyer,
        [e.target.name]: e.target.value
      }
    )
  }

  const urlValueHandler = (e) => {
    setUrl(
      {
        ...url,
        [e.target.name]: e.target.value
      }
    )
  }

  const settingsValueHandler = (e) => {
    setSettings(
      {
        ...settings,
        [e.target.name]: e.target.value
      }
    )
  }


  return (
    <div>
      <div className="main">
        <div className="form">
          <h2 className="title">결제 승인</h2>
          <b>POST</b>/v1/payments/confirm<br /><br />
          <div className="form-className">
            {/** transaction_type **/}
            <div className="form-floating">
              <select className="form-select" name="transaction_type" onChange={paymentValueHandler} value={payment.transaction_type || ""}>
                <option value="PAYMENT">PAYMENT</option>
                <option value="READY">READY</option>
                <option value="CONFIRM">CONFRIM</option>
              </select>
              <label htmlFor="floatingInput">txnType</label>
            </div>

            {/** order_id **/}
            <div className="form-floating">
              <input type="text" className="form-control" placeholder="order_id" name="order_id" onChange={paymentValueHandler} value={payment.order_id || ""} />
              <label htmlFor="floatingInput">order_id</label>
            </div>

            {/** currency **/}
            <div className="form-floating">
              <select className="form-select" name="currency" onChange={paymentValueHandler} value={payment.currency || ""}>
                <option value="KRW">KRW</option>
                <option value="USD">USD</option>
                <option value="MYR">MYR</option>
              </select>
              <label htmlFor="floatingInput">Currency</label>
            </div>

            {/** amount **/}
            <div className="form-floating">
              <input type="text" className="form-control" placeholder="amount" name="amount" onChange={paymentValueHandler} value={payment.amount || ""} />
              <label htmlFor="floatingInput">amount</label>
            </div>

            {/** lang **/}
            <div className="form-floating">
              <select className="form-select" name="lang" onChange={paymentValueHandler} value={payment.lang || ""}>
                <option value="EN">EN</option>
                <option value="KR">KR</option>
              </select>
              <label htmlFor="floatingInput">Lang</label>
            </div>

            {/** payment_method **/}
            <div className="form-floating">
              <select className="form-select" name="payment_method" onChange={paymentValueHandler} value={payment.payment_method || ""}>
                <option value="">VISA</option>
                <option value="">전체</option>
              </select>
              <label htmlFor="floatingInput">payment_method</label>
            </div>

            {/** mid **/}
            <div className="form-floating">
              <input type="text" className="form-control" placeholder="mid" name="mid" onChange={merchantValueHandler} value={merchant.mid || ''} />
              <label htmlFor="floatingInput">mid</label>
            </div>

            {/** email **/}
            <div className="form-floating">
              <input type="text" className="form-control" placeholder="name" name="name" onChange={buyerValueHandler} value={buyer.name} />
              <label htmlFor="floatingInput">name</label>
            </div>

            {/** email **/}
            <div className="form-floating">
              <input type="email" className="form-control" placeholder="email" name="email" onChange={buyerValueHandler} />
              <label htmlFor="floatingInput">email</label>
            </div>

            {/** return_url **/}
            <div className="form-floating">
              <input type="text" className="form-control" placeholder="return_url" name="return_url" onChange={urlValueHandler} />
              <label htmlFor="floatingInput">return_url</label>
            </div>

            {/** status_url **/}
            <div className="form-floating">
              <input type="text" className="form-control" placeholder="status_url" name="status_url" onChange={urlValueHandler} />
              <label htmlFor="floatingInput">status_url</label>
            </div>

            {/** display_type **/}
            <div className="form-floating">
              <input type="text" className="form-control" placeholder="display_type" name="display_type" onChange={urlValueHandler} />
              <label htmlFor="floatingInput">display_type</label>
            </div>

            {/** ostype **/}
            <div className="form-floating">
              <input type="text" className="form-control" placeholder="ostype" name="ostype" onChange={urlValueHandler} />
              <label htmlFor="floatingInput">ostype</label>
            </div>

            {/** fgkey **/}
            <div className="form-floating">
              <input type="text" className="form-control" id="fgkey_input" placeholder="fgkey" name="fgkey" defaultValue={fgkey} />
              <label htmlFor="floatingInput">fgkey</label>
            </div>
            <br />
            <Button onClick={ready}>결제 준비</Button>
            <Button onClick={confirm}>결제 시작</Button>

            
            <div>{confirmBody.merchant.mid}</div>
            <div>{confirmBody.merchant.mid}</div>
          </div>
        </div>



        <div className="preview">
          <pre className="json_preview">
            {JSON.stringify(confirmBody, null, 2)}<br /><br /><br /><br />
          </pre>
        </div>
      </div>

    </div>
  )
}

export default RealConfirm