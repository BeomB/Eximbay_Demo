import React, { useState } from 'react'
import Axios from 'axios';
import { Button } from 'react-bootstrap'

const Ready = () => {

  //API 통신 시 필요한 헤더 인증 값을 생성하기 위한 Method
  function getBasicAuthenticationHeader(username, password) {
    var valueToEncode = username + ":" + password;
    var encodedValue = btoa(valueToEncode);
    console.log("Basic " + encodedValue);
    return "Basic " + encodedValue;
}

var headerAuthorization = getBasicAuthenticationHeader("test_2B0AF30BE025C5CFBB54", "");   ///apikey 생성


/// 결제 준비 시 필요한 파라미터 
const paymentObject = {
    "payment": {
        "transaction_type": "PAYMENT",
        "order_id": "sample_order_id",
        "currency": "KRW",
        "amount": "500",
        "lang": "KR",
        "payment_method": "P000"
    },
    "merchant": {
        "mid": "1E72B151E8"
    },
    "buyer": {
        "name": "sample",
        "email": "sample@eximbay.com"
    },
    "url": {
        "return_url": "https://simplesource/demo/returnurl.jsp",
        "status_url": "https://simplesource/demo/statusurl.jsp"
    }
}

////'https://api-test.eximbay.com/v1/payments/ready',
///결제 준비 API 통신
function ready() {
    $.ajax({
        url: 'https://api-test.eximbay.com/v1/payments/ready',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // 헤더 이름과 값 설정
            'Authorization': headerAuthorization,
        },
        data: {
            paymentObject
        },
        success: function (response) {
            // 요청이 성공하고 응답이 완료되었을 때 실행되는 코드
            console.log(response); // 응답 데이터를 처리하는 예시
            // 여기에 응답 데이터를 처리하는 코드를 작성하세요
        },
        error: function (xhr, status, error) {
            // 요청이 실패하거나 응답이 에러 상태일 때 실행되는 코드
            console.log('Request failed. Status:', status);
        }
    });
}


  return (
    <div>
    <button type="button" onclick="ready();">1. 결제 준비(fgKey 생성)</button>
    <button type="button" onclick="payment();">2. 결제 모듈 호출</button>
    </div>
  )
}

export default Ready