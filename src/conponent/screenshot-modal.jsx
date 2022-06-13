import { Modal } from 'antd'
import React, { useEffect } from 'react'

const ScreenshotModal = (props) => {
    const handleCancel = () => {
        props.onHandleCancel()
    }
    useEffect(() => {
        // console.log(props.contextsss, 'contextssscontextssscontextsss')
    })
    return (
        <>
            <Modal title="Basic Modal" visible={props.isModalVisible} onOk={handleCancel} onCancel={handleCancel}>
                <img src={props.imgBeas64Show} alt="屏幕截图" />
            </Modal>
        </>
    )
}
export default ScreenshotModal
