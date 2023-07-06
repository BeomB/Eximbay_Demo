import React, { useState } from 'react'
import Axios from 'axios';
import { Button } from 'react-bootstrap'

const RealRetrive = () => {

  ///   결제 준비 요청 URL
  const url = "https://api-test.eximbay.com/v1/payments/retrieve";

  ///   헤더 값, Postman : Headers 값
  const Headers = {
    headers: {
      "Content-Type": 'application/json',
      "Authorization": 'Basic dGVzdF9DMkZBMUY1ODQ4OUMxNTg0MTk5Qjo='
    }
  };

  /// 결과 값
  const [result, setResult] = useState()

  const [payment, setPayment] = useState({
    order_id: new Date().toJSON(),
    currency: "KRW",
    amount: "100",
    lang: "KR",
  })

  const [value, setValue] = useState(
    {
      mid: "1849705C64",
      key_field: "transaction_id"
    }
  )

  const [other_param, setOther_param] = useState(
    {
      param1: "param1",
      param2: "param2"
    }
  )

  const retrieveBody = "1";


  /// 결제 준비, Postman : Send
  const retrieve = () => {
    Axios.post(url, retrieveBody, Headers)   // Axios를 통해 앞서 설정한 Url, retrieveBody, Headers설정을 받아서 Post 요청 진행
      .then(res => {
        setResult(res.data)
      })
      .catch(err => {                     // 에러 나면 에러 출력
        console.log(err.response.data.message);
      });
  }

  const test = () => {
    console.log(value)
    console.log(payment)
    console.log(other_param)
  }



  const valueHandler = (e) => {
    setValue(
      {
        ...value,
        [e.target.name]: e.target.value
      }
    )
  }

  const paymentValueHandler = (e) => {
    setPayment(
      {
        ...payment,
        [e.target.name]: e.target.value
      }
    )
  }

  const other_paramValueHandler = (e) => {
    setOther_param(
      {
        ...other_param,
        [e.target.name]: e.target.value
      }
    )
  }



  return (
    <div className="main">
      <div className="form">
        <h2 className="title">결제 조회</h2>
        <b>POST</b>/v1/payments/retrieve<br /><br />
        <div className="form-class">

          {/** mid **/}
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">mid</label>
            <input type="text" className="form-control" name='mid' onChange={valueHandler} value={value.mid} />
          </div>

          {/** key_field **/}
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">key_field</label>
            <select className="form-select" name="key_field" onChange={valueHandler} value={value.key_field}>
              <option value="transaction_id">transaction_id</option>
              <option value="order_id">order_id</option>
            </select>
          </div>

          {/** Payment **/}
          <label id="objectName">⦁ Payment</label><br /><br />

          {/** order_id **/}
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">order_id</label>
            <input type="text" className="form-control" name='order_id' onChange={paymentValueHandler} value={payment.order_id || ""} />
          </div>


          {/** currency **/}
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">currency</label>
            <input type="text" className="form-control" name='currency' onChange={paymentValueHandler} value={payment.currency || ""} />
          </div>


          {/** amount **/}
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">amount</label>
            <input type="text" className="form-control" name='amount' onChange={paymentValueHandler} value={payment.amount || ""} />
          </div>

          {/** lang **/}
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">lang</label>
            <input type="text" className="form-control" name='lang' onChange={paymentValueHandler} value={payment.lang || ""} />
          </div>

          {/** transaction_id 필수 X **/}

          <h6 type="button" data-bs-toggle="collapse" data-bs-target="#transactionCollapse" aria-expanded="false" aria-controls="collapseExample">
            ▼ transaction_id
          </h6>
          <div class="collapse" id="transactionCollapse">
            <input type="text" className="form-control" name='transaction_id' onChange={paymentValueHandler} value={payment.transaction_id} />
          </div> <br />




          {/** other_param **/}

          <label id="objectName" type="button" data-bs-toggle="collapse" data-bs-target="#otherCollapse" aria-expanded="false" aria-controls="collapseExample">
            ⦁ other_param
          </label><br /><br />

          <div class="collapse" id="otherCollapse">

            {/** param1 **/}
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">param1</label>
              <input type="text" className="form-control" name='param1' onChange={other_paramValueHandler} value={other_param.param1} />
            </div>

            {/** param2 **/}
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">param2</label>
              <input type="text" className="form-control" name='param2' onChange={other_paramValueHandler} value={other_param.param2} />
            </div>
          </div><br /><br />

          <Button onClick={test}>결제 test</Button>
          <Button onClick={retrieve}>결제 준비</Button>
        </div>
      </div>
    </div>
  )
}

export default RealRetrive