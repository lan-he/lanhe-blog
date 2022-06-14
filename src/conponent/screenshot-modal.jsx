import { Modal } from 'antd'
import React from 'react'

const ScreenshotModal = (props) => {
    const handleCancel = () => {
        props.onHandleCancel()
    }
    return (
        <>
            <Modal title="截图" visible={props.isModalVisible} onOk={handleCancel} onCancel={handleCancel} width={900}>
                <img style={{ width: '100%' }} src={props.imgBeas64Show} alt="屏幕截图" />
            </Modal>
        </>
    )
}
export default ScreenshotModal
