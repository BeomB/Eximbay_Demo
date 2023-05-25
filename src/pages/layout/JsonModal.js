import Modal from 'react-modal'
import React from 'react'
import { Button } from 'react-bootstrap'
import { useEffect } from 'react'
// import Qlogo from '../image/Qlogo.png'

Modal.setAppElement("#root")

const JsonModal = (props) => {

    const objectCopy = () => {

        let copyText = JSON.stringify({
            jsonObject
        }, null, 2)
        navigator.clipboard.writeText(copyText);
        alert("복사 완료")
    }

    useEffect(() => {
      console.log(props.jsonObject)
    }, [])
    

    const jsonObject = props.jsonObject

    return (
        <div className='modal'>

            <Modal
                isOpen={props.openModal}
                onRequestClose={props.closeModal}
            >
                <div className='modalItem'>
                    <br/>
                    <pre>
                        {JSON.stringify({
                            jsonObject
                        }, null, 2)}<br />
                    </pre>
                    <Button style={{ marginRight: "10px", width: "8%" }} onClick={props.closeModal}>닫기</Button>
                    <Button style={{ marginRight: "10px", width: "8%" }} onClick={objectCopy}> 복사 </Button><br /><br />
                </div>
            </Modal>
        </div>
    )
}

export default JsonModal