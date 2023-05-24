import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { Button } from 'react-bootstrap'
import JsonModal from './layout/JsonModal';

const Payment = () => {




  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://api-test.eximbay.com/v1/javascriptSDK.js";
    script.id = "sdkDomain"
    document.head.appendChild(script);
  }, []);

  ///   결제 준비 요청 URL
  let readyUrl = "https://api-test.eximbay.com/v1/payments/ready"

  ///   헤더 값, Postman : Headers 값
  const Headers = {
    headers: {
      "Content-Type": 'application/json',
      "Authorization": 'Basic dGVzdF9DMkZBMUY1ODQ4OUMxNTg0MTk5Qjo='
    }
  };

  /// fgkey
  const [fgkey, setFgkey] = useState("")

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
    transaction_type: "PAYMENT",
    order_id: "KOBE_TEST",
    currency: "USD",
    amount: "1",
    lang: "EN",
  }))

  const paymentValueHandler = (e) => {
    setPayment(
      {
        ...payment,
        [e.target.name]: e.target.value
      }
    )
  }

  const [merchant, setMerchant] = useState(() => ({
    mid: "1849705C64"
  }))

  const merchantValueHandler = (e) => {
    setMerchant(
      {
        ...merchant,
        [e.target.name]: e.target.value
      }
    )
  }

  const [url, setUrl] = useState(() => ({
    return_url: "https://secureapi.test.eximbay.com/paytest/demo/returnurl.jsp",
    status_url: "https://secureapi.test.eximbay.com/paytest/demo/status.jsp"
  }))

  const urlValueHandler = (e) => {
    setUrl(
      {
        ...url,
        [e.target.name]: e.target.value
      }
    )
  }

  const [buyer, setBuyer] = useState(() => ({
    name: "kobe",
    email: "kobe123@eximbay.com"
  }))

  const buyerValueHandler = (e) => {
    setBuyer(
      {
        ...buyer,
        [e.target.name]: e.target.value
      }
    )
  }

  const [tax, setTax] = useState(() => ({

  }))

  const taxValueHandler = (e) => {
    setTax(
      {
        ...tax,
        [e.target.name]: e.target.value
      }
    )
  }

  const [other_param, setOther_param] = useState(() => ({
    param1: "param1",
    param2: "param2"
  }))

  const paramValueHandler = (e) => {
    setOther_param(
      {
        ...other_param,
        [e.target.name]: e.target.value
      }
    )
  }

  const [product, setProduct] = useState(() => ([{
    name: "test_product",
    quantity: "1",
    unit_price: "500",
    link: "www.kopenmarket.com"
  }]))

  const productValueHandler = (e) => {
    setProduct(
      {
        ...product,
        [e.target.name]: e.target.value
      }
    )
  }

  const [surcharge, setSurcharge] = useState(() => ([{

  }]))

  const surchargeValueHandler = (e) => {
    setSurcharge(
      {
        ...surcharge,
        [e.target.name]: e.target.value
      }
    )
  }

  const [settings, setSettings] = useState(() => ({

  }))

  const settingsValueHandler = (e) => {
    setSettings(
      {
        ...settings,
        [e.target.name]: e.target.value
      }
    )
  }

  const [showModal, setShowModal] = useState(false);

  /// 결제 준비, Postman : Send
  const ready = () => {

    const readyObject = {
      payment,
      merchant,
      url,
      buyer,
      tax,
      other_param,
      product,
      surcharge,
      settings
    }

    Axios.post(readyUrl, readyObject, Headers)   // Axios를 통해 앞서 설정한 Url, confirmBody, Headers설정을 받아서 Post 요청 진행
      .then((res) => {
        setFgkey(() => res.data.fgkey)          // res는 axios 요청 이후 엑심베이에서 응답 주는 값, res.data.fgkey는 결제 준비 응닶 fgkey 값  
        // fgkey = res.data.fgkey;
      })
      .catch(err => {
        console.log(err.response.data.message);
      });
  }


  /// 결제 준비, Postman : Send
  const callSDK = () => {
    ready()
    // 엑심베이 SDK를 불러오기 위한 eslint-disable-next-line 설정
    // eslint-disable-next-line
    EXIMBAY.request_pay(
      {
        fgkey,
        payment,
        merchant,
        url,
        buyer,
        tax,
        other_param,
        product,
        surcharge,
        settings
      }
    );
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

  const paymentObject = {
    fgkey,
    payment,
    merchant,
    url,
    buyer,
    tax,
    other_param,
    product,
    surcharge,
    settings
}

  return (
    <>
      <div className="main">
        <div className="form">
          <div className='left'>
            <br />
            <h2 className="title">결제</h2><br />
            <Button style={{ marginRight: "10px" }} onClick={ready}>fgkey 생성</Button>
            <Button style={{ marginRight: "10px" }} onClick={callSDK}>SDK 호출</Button>
            <Button style={{ marginRight: "10px" }} id="objectPreview" onClick={ObjectPreview}> 미리보기 </Button> <br/><br/>
            


            {/** ------------- TEST or REAL ------------ **/}
            <select className="form-select" name='domain' onChange={domainValueHandler} >
              <option value="TEST">TEST</option>
              <option value="REAL">REAL</option>
            </select>


            {/** ------------- fgkey ------------ **/}
            <label htmlFor="exampleFormControlInput1" className="form-label" id="fgkey">fgkey : {fgkey}</label>

            {/** ------------- Payment ------------ **/}
            <div className="accordion mb-2">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingPayment">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePayment" aria-expanded="true" aria-controls="collapsePayment">
                    payment
                  </button>
                </h2>
                <div id="collapsePayment" className="accordion-collapse collapse show" aria-labelledby="headingPayment" data-bs-parent="#accordionPayment">
                  <div className="accordion-body">
                    {/** transaction_type **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">transaction_type</label>
                      <select className="form-select" name='transaction_type' onChange={paymentValueHandler} value={payment.transaction_type} >
                        <option value="PAYMENT">PAYMENT</option>
                        <option value="PAYER_AUTH">PAYER_AUTH</option>
                        <option value="AUTHORIZE">AUTHORIZE</option>
                      </select>
                    </div>

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

                    {/** lang **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">lang</label>
                      <select className="form-select" name='lang' onChange={paymentValueHandler} value={payment.lang || ""} >
                        <option value="KR">KR</option>
                        <option value="EN">EN</option>
                      </select>
                    </div>

                    {/** payment_method **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" >payment_method</label>
                      <select className="form-select" name='payment_method' onChange={paymentValueHandler} value={payment.payment_method || ""} >
                        <option value="">전체</option>
                        <option value="P000">CreditCard</option>
                        <option value="P101"> VISA</option>
                        <option value="P102"> MasterCard</option>
                        <option value="P103"> AMEX</option>
                        <option value="P104"> JCB</option>
                        <option value="P105"> UnionPay(Offline)</option>
                        <option value="P106"> Diners</option>
                        <option value="P107"> Discover</option>
                        <option value="P108"> Mir</option>
                        <option value="P001"> PayPal</option>
                        <option value="P002"> CUP(UnionPay)</option>
                        <option value="P003"> Alipay or Alipay Plus</option>
                        <option value="P174"> Alipay Plus(ALIPAY_CN)</option>
                        <option value="P003"> Alipay Plus(CONNECT_WALLET)</option>
                        <option value="P141"> WeChat</option>
                        <option value="P142"> WeChat in App</option>
                        <option value="P143"> WeChat(OA)</option>
                        <option value="P006"> eContext</option>
                        <option value="P007"> Molpay</option>
                        <option value="P171"> Molpay(MYR)</option>
                        <option value="P172"> Molpay(VND)</option>
                        <option value="P173"> Molpay(THB)</option>
                        <option value="P011"> Yandex</option>
                        <option value="PG01"> 2C2P</option>
                        <option value="P185"> grabPay(SGD)</option>
                        <option value="P186"> linePay</option>
                        <option value="P189"> grabPay(MYR)</option>
                        <option value="P190"> grabPay(PHP)</option>
                        <option value="P201"> PayEase Express Payment</option>
                        <option value="P202"> PayEase Online Banking</option>
                        <option value="P008"> PaysBuy</option>
                        <option value="P302"> KakaoPay</option>
                        <option value="P110"> BC카드</option>
                        <option value="P111"> KB카드</option>
                        <option value="P112"> 하나(외환)</option>
                        <option value="P113"> 삼성카드</option>
                        <option value="P114"> 신한카드</option>
                        <option value="P115"> 현대카드</option>
                        <option value="P116"> 롯데카드</option>
                        <option value="P117"> NH카드</option>
                        <option value="P118"> 하나카드</option>
                        <option value="P119"> 씨티카드</option>
                        <option value="P120"> 우리카드</option>
                        <option value="P121"> 수협카드</option>
                        <option value="P122"> 제주카드</option>
                        <option value="P123"> 전북카드</option>
                        <option value="P124"> 광주카드</option>
                        <option value="P125"> 카카오뱅크</option>
                        <option value="P126"> 케이뱅크</option>
                        <option value="P127"> 미래에셋대우</option>
                        <option value="P199"> 기타카드</option>
                        <option value="P301"> BankPay</option>
                        <option value="P010"> BestPay</option>
                        <option value="P303"> Toss</option>
                        <option value="P306"> SmilePay</option>
                        <option value="P205"> VN eWallet</option>
                        <option value="P015"> NaverPay</option>
                        <option value="P307"> NaverPay(Card)</option>
                        <option value="P308"> NaverPay(Point)</option>
                        <option value="P305"> 가상계좌</option>
                        <option value="P309"> OpenBanking(오픈뱅킹)</option>
                      </select>
                    </div>

                    {/** multi_payment_method 필수 X **/}

                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" >multi_payment_method</label>
                      <input type="text" className="form-control" name='multi_payment_method' onChange={paymentValueHandler} value={payment.multi_payment_method || ""} />
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/** ------------- merchant ------------ **/}
            <div className="accordion mb-2" >
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingMerchant">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMerchant" aria-expanded="true" aria-controls="collapseMerchant">
                    merchant
                  </button>
                </h2>
                <div id="collapseMerchant" className="accordion-collapse collapse show" aria-labelledby="headingMerchant" data-bs-parent="#accordionMerchant">
                  <div className="accordion-body">

                    {/** mid **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">mid</label>
                      <select className="form-select" name='mid' onChange={merchantValueHandler} value={merchant.mid || ""} >
                        <option value="1849705C64">가맹점 연동용 ( TEST - 1849705C64 )</option>
                        <option value="3474153615">Eximbay_live ( REAL - 3474153615 )</option>
                      </select>
                      {/* <input type="text" className="form-control" name='transaction_type' onChange={merchantValueHandler} value={merchant.mid || ""} /> */}
                    </div>

                    {/** shop **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">shop</label>
                      <input type="text" className="form-control" name='shop' onChange={merchantValueHandler} value={merchant.shop || ""} />
                    </div>

                    {/** partner_code **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">partner_code</label>
                      <input type="text" className="form-control" name='partner_code' onChange={merchantValueHandler} value={merchant.partner_code || ""} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/** ------------- Url ------------ **/}
            <div className="accordion mb-2" >
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingUrl">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseUrl" aria-expanded="true" aria-controls="collapseUrl">
                    url
                  </button>
                </h2>
                <div id="collapseUrl" className="accordion-collapse collapse show" aria-labelledby="headingUrl" data-bs-parent="#accordionUrl">
                  <div className="accordion-body">
                    {/** return_url **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">return_url</label>
                      <input type="text" className="form-control" name='return_url' onChange={urlValueHandler} value={url.return_url || ""} />
                    </div>
                    {/** status_url **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">status_url</label>
                      <input type="text" className="form-control" name='status_url' onChange={urlValueHandler} value={url.status_url || ""} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/** -------------  ------------ **/}
            <div className="accordion mb-2">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingBuyer">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBuyer" aria-expanded="true" aria-controls="collapseBuyer">
                    buyer
                  </button>
                </h2>
                <div id="collapseBuyer" className="accordion-collapse collapse show" aria-labelledby="headingBuyer" data-bs-parent="#accordionBuyer">
                  <div className="accordion-body">

                    {/** name **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">name</label>
                      <input type="text" className="form-control" name='name' onChange={buyerValueHandler} value={buyer.name || ""} />
                    </div>
                    {/** phone_number 필수 X **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">phone_number</label>
                      <input type="text" className="form-control" name='phone_number' onChange={buyerValueHandler} value={buyer.phone_number || ""} />
                    </div>
                    {/** email **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">email</label>
                      <input type="text" className="form-control" name='email' onChange={buyerValueHandler} value={buyer.email || ""} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/** ------------- tax ------------ **/}
            <div className="accordion mb-2">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTax">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTax" aria-expanded="false" aria-controls="collapseTax">
                    tax
                  </button>
                </h2>
                <div id="collapseTax" className="accordion-collapse collapse " aria-labelledby="headingTax" data-bs-parent="#accordionTax">
                  <div className="accordion-body">
                    {/** amount_tax_free **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" >amount_tax_free</label>
                      <input type="text" className="form-control" name='amount_tax_free' onChange={taxValueHandler} value={tax.amount_tax_free || ""} />
                    </div>

                    {/** amount_taxable **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" >amount_taxable</label>
                      <input type="text" className="form-control" name='amount_taxable' onChange={taxValueHandler} value={tax.amount_taxable || ""} />
                    </div>

                    {/** amount_vat **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" >amount_vat</label>
                      <input type="text" className="form-control" name='amount_vat' onChange={taxValueHandler} value={tax.amount_vat || ""} />
                    </div>

                    {/** amount_service_fee **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" >amount_service_fee</label>
                      <input type="text" className="form-control" name='amount_service_fee' onChange={taxValueHandler} value={tax.amount_service_fee || ""} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="right">
            {/** ------------- other_param ------------ **/}
            <div className="accordion mb-2">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingParam">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseParam" aria-expanded="false" aria-controls="collapseParam">
                    other_param
                  </button>
                </h2>
                <div id="collapseParam" className="accordion-collapse collapse" aria-labelledby="headingProduct" data-bs-parent="#accordionParam">
                  <div className="accordion-body">
                    {/** amount_tax_free **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">param1</label>
                      <input type="text" className="form-control" name='param1' onChange={paramValueHandler} value={other_param.param1 || ""} />
                    </div>

                    {/** amount_tax_free **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">param2</label>
                      <input type="text" className="form-control" name='param2' onChange={paramValueHandler} value={other_param.param2 || ""} />
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/** ------------- product ------------ **/}
            <div className="accordion mb-2">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingProduct">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProduct" aria-expanded="true" aria-controls="collapseProduct">
                    product
                  </button>
                </h2>
                <div id="collapseProduct" className="accordion-collapse collapse show" aria-labelledby="headingTax" data-bs-parent="#accordionProduct">
                  <div className="accordion-body">
                    {/** product.name **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">name</label>
                      <input type="text" className="form-control" name='name' onChange={productValueHandler} value={product[0].name || ""} />
                    </div>

                    {/** product.quantity **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">quantity</label>
                      <input type="text" className="form-control" name='quantity' onChange={productValueHandler} value={product[0].quantity || ""} />
                    </div>

                    {/** product.unit_price **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">unit_price</label>
                      <input type="text" className="form-control" name='unit_price' onChange={productValueHandler} value={product[0].unit_price || ""} />
                    </div>

                    {/** product.link **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">link</label>
                      <input type="text" className="form-control" name='link' onChange={productValueHandler} value={product[0].link || ""} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/** ------------- surcharge ------------ **/}
            <div className="accordion mb-2">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSurcharge">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSurcharge" aria-expanded="false" aria-controls="collapseSurcharge">
                    surcharge
                  </button>
                </h2>
                <div id="collapseSurcharge" className="accordion-collapse collapse" aria-labelledby="headingSurcharge" data-bs-parent="#accordionSurcharge">
                  <div className="accordion-body">
                    {/** surcharge.name **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">name</label>
                      <input type="text" className="form-control" name='name' onChange={surchargeValueHandler} value={surcharge.name || ""} />
                    </div>

                    {/** surcharge.quantity **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">quantity</label>
                      <input type="text" className="form-control" name='quantity' onChange={surchargeValueHandler} value={surcharge.quantity || ""} />
                    </div>

                    {/** surcharge.unit_price **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">unit_price</label>
                      <input type="text" className="form-control" name='unit_price' onChange={surchargeValueHandler} value={surcharge.unit_price || ""} />
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/** ------------- settings ------------ **/}
            <div className="accordion mb-2">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSettings">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSettings" aria-expanded="false" aria-controls="collapseSettings">
                    settings
                  </button>
                </h2>
                <div id="collapseSettings" className="accordion-collapse collapse" aria-labelledby="headingSettings" data-bs-parent="#accordionSettings">
                  <div className="accordion-body">
                    {/** display_type **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">display_type</label>
                      <input type="text" className="form-control" name='display_type' onChange={settingsValueHandler} value={settings.display_type || ""} />
                    </div>

                    {/** autoclose **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">autoclose</label>
                      <input type="text" className="form-control" name='autoclose' onChange={settingsValueHandler} value={settings.autoclose || ""} />
                    </div>

                    {/** site_foreign_currency **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">site_foreign_currency</label>
                      <input type="text" className="form-control" name='site_foreign_currency' onChange={settingsValueHandler} value={settings.site_foreign_currency || ""} />
                    </div>


                    {/** call_from_app **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">call_from_app</label>
                      <input type="text" className="form-control" name='call_from_app' onChange={settingsValueHandler} value={settings.call_from_app || ""} />
                    </div>

                    {/** call_from_scheme **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">call_from_scheme</label>
                      <input type="text" className="form-control" name='call_from_scheme' onChange={settingsValueHandler} value={settings.call_from_scheme || ""} />
                    </div>

                    {/** issuer_country **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">issuer_country</label>
                      <input type="text" className="form-control" name='issuer_country' onChange={settingsValueHandler} value={settings.issuer_country || ""} />
                    </div>

                    {/** ostype **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">ostype</label>
                      <input type="text" className="form-control" name='ostype' onChange={settingsValueHandler} value={settings.ostype || ""} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal ? <JsonModal openModal={openModal} name= {paymentObject} closeModal={closeModal}></JsonModal> : null}

    </>

  )
}
export default Payment


{/* <div className="preview">
        <div className="collapse" id="otherCollapse">
          <div className="json_preview">
            <pre>
              {JSON.stringify({
                fgkey,
                payment,
                merchant,
                url,
                buyer,
                tax,
                other_param,
                product,
                surcharge,
                settings
              }, null, 2)}<br /><br /><br /><br />
            </pre>
          </div>
        </div>
      </div> */}