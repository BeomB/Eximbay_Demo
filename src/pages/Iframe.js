import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { Button } from 'react-bootstrap'

const Iframe = () => {
  
  /// 결제 준비, Postman : Send
  return (
    <div>
    <iframe className="main" width={500} height={500} src='/sdk'>
     
    </iframe>
    </div>
  )
}
export default Iframe








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