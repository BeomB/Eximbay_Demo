import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { Button } from 'react-bootstrap'
import JsonModal from './layout/JsonModal';

const Cancel = () => {

  const mid = "1849705C64";
  const transid = "transid123";

  ///   결제 준비 요청 URL
  let readyUrl = `https://api-test.eximbay.com/v1/payments/${transid}/cancel`

  ///   헤더 값, Postman : Headers 값
  const Headers = {
    headers: {
      "Content-Type": 'application/json',
      "Authorization": 'Basic dGVzdF9DMkZBMUY1ODQ4OUMxNTg0MTk5Qjo='
    }
  };

  /// domain
  const domain = "TEST"

  const domainValueHandler = (e) => {
    if (e.target.value === "TEST") {
      const script = document.createElement("script");
      script.src = "https://api-test.eximbay.com/v1/javascriptSDK.js";
      script.id = "sdkDomain"
      document.head.appendChild(script);
      console.log(script.src)

    } else if (e.target.value === "REAL") {
      const script = document.createElement("script");
      script.src = "https://api.eximbay.com/v1/javascriptSDK.js";
      script.id = "sdkDomain"
      document.head.appendChild(script);
      console.log(script.src)
    }

  }


  const [payment, setPayment] = useState(() => ({
    order_id: "refund_order_id_test1",
    currency: "USD",
    amount: "1",
    balance: "1",
    lang: "EN",
  }))

  const paymentValueHandler = (e) => {
    setPayment({
      ...payment,
      [e.target.name]: e.target.value
    }
    )
  }

  const [refund, setRefund] = useState(() => ({

    refund_type: "F",
    refund_amount: "1",
    refund_id: "refund_id_test1",
    reason: "관리자에 의한 취소"

  }))

  const refundValueHandler = (e) => {
    setRefund(
      {
        ...refund,
        [e.target.name]: e.target.value
      }
    )
  }

  const cancelObject = {
    mid,
    refund,
    payment
  }


  const [showModal, setShowModal] = useState(false);

  /// 결제 준비, Postman : Send
  const cancel = () => {

    Axios.post(readyUrl, cancelObject, Headers)   // Axios를 통해 앞서 설정한 Url, confirmBody, Headers설정을 받아서 Post 요청 진행
      .then((res) => {
        // setFgkey(() => res.data.fgkey)          // res는 axios 요청 이후 엑심베이에서 응답 주는 값, res.data.fgkey는 결제 준비 응닶 fgkey 값  
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.response.data.message);
      });
  }

  function openModal() {

    setShowModal(true)

  }
  function closeModal() {

    setShowModal(false)
  }



  const ObjectPreview = () => {
    setShowModal(!showModal)
  }



  return (
    <>
      <div className="main">
        <div className="form">
          <div className='left'>
            <br />
            <h2 className="title">취소</h2><br />
            <Button style={{ marginRight: "10px" }} onClick={cancel}>거래 취소</Button>
            <Button style={{ marginRight: "10px" }} id="objectPreview" onClick={ObjectPreview}> 미리보기 </Button> <br /><br />



            {/** ------------- TEST or REAL ------------ **/}
            <select className="form-select" name='domain' onChange={domainValueHandler} >
              <option value="TEST">TEST</option>
              <option value="REAL">REAL</option>
            </select><br></br>


            {/** ------------- RefundInfo ------------ **/}
            <div className="accordion mb-2">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingRefundInfo">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseRefundInfo" aria-expanded="true" aria-controls="collapseRefundInfo">
                    refund_Information
                  </button>
                </h2>
                <div id="collapseRefundInfo" className="accordion-collapse collapse show" aria-labelledby="headingRefundInfo" data-bs-parent="#accordionRefundInfo">
                  <div className="accordion-body">
                    {/** order_id **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">transid</label>
                      <input type="text" className="form-control" name='mid' onChange={paymentValueHandler} value={mid || ""} />
                    </div>

                    {/** order_id **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">order_id</label>
                      <input type="text" className="form-control" name='order_id' onChange={paymentValueHandler} value={payment.order_id || ""} />
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/** ------------- payment ------------ **/}
            <div className="accordion mb-2">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingPayment">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePayment" aria-expanded="true" aria-controls="collapsePayment">
                    payment
                  </button>
                </h2>
                <div id="collapsePayment" className="accordion-collapse collapse show" aria-labelledby="headingPayment" data-bs-parent="#accordionPayment">
                  <div className="accordion-body">

                    {/** order_id **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">order_id</label>
                      <input type="text" className="form-control" name='order_id' onChange={paymentValueHandler} value={payment.order_id || ""} />
                    </div>

                    {/** currency **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">currency</label>
                      <select className="form-select" name='currency' onChange={paymentValueHandler} value={payment.currency || ""} >
                        <option value="USD">USD</option>
                        <option value="KRW">KRW</option>
                      </select>
                    </div>

                    {/** amount **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">amount</label>
                      <input type="text" className="form-control" name='amount' onChange={paymentValueHandler} value={payment.amount || ""} />
                    </div>

                    {/** amount **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">balance</label>
                      <input type="text" className="form-control" name='balance' onChange={paymentValueHandler} value={payment.balance || ""} />
                    </div>

                    {/** lang **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">lang</label>
                      <select className="form-select" name='lang' onChange={paymentValueHandler} value={payment.lang || ""} >
                        <option value="KR">KR</option>
                        <option value="EN">EN</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <br />
        <div className="right">
          {/** ------------- refund ------------ **/}
          <div className="accordion mb-2">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingRefund">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseRefund" aria-expanded="true" aria-controls="collapseRefund">
                  refund
                </button>
              </h2>
              <div id="collapseRefund" className="accordion-collapse collapse show" aria-labelledby="headingRefund" data-bs-parent="#accordionRefund">
                <div className="accordion-body">

                  {/** refund_type **/}
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">refund_type</label>
                    <input type="text" className="form-control" name='refund_type' onChange={refundValueHandler} value={refund.refund_type || ""} />
                  </div>

                  {/** refund_amount **/}
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">refund_amount</label>
                    <select className="form-select" name='refund_amount' onChange={refundValueHandler} value={refund.refund_amount || ""} >
                      <option value="USD">USD</option>
                      <option value="KRW">KRW</option>
                    </select>
                  </div>

                  {/** refund_id **/}
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">refund_id</label>
                    <input type="text" className="form-control" name='refund_id' onChange={paymentValueHandler} value={refund.refund_id || ""} />
                  </div>

                  {/** reason **/}
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">reason</label>
                    <input type="text" className="form-control" name='reason' onChange={paymentValueHandler} value={refund.reason || ""} />
                  </div>

                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal ? <JsonModal openModal={openModal} name={cancelObject} closeModal={closeModal}></JsonModal> : null}

    </>

  )
}
export default Cancel

