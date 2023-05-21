import Modal from 'react-modal'
import React from 'react'
// import Qlogo from '../image/Qlogo.png'

Modal.setAppElement("#root")

const JsonModal = (props) => {

    const jsonObject = props.name

    return (
        <div className='modal'>
            <Modal
            isOpen={props.openModal}
            onRequestClose={props.closeModal}
            >
                <div className='modalItem'>
                <pre>
              {/* {JSON.stringify({
                props
              }, null, 2)}<br /><br /><br /><br /> */}
              {props.name.merchant.mid}
            </pre>
                <button onClick={props.closeModal}>닫기</button>
                </div>
            </Modal>
        </div>
    )
}

export default JsonModal