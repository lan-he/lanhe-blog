import React, { useState } from 'react'
import html2canvas from 'html2canvas'
import './toimg-design.less'
import ScreenshotModal from '@/conponent/screenshot-modal.jsx'
import { Button } from 'antd'

export default function ToimgDesign() {
    var selected
    const dragOver = (e) => {
        e.preventDefault()
        // 拖动目标(drop)是不是在拖拽源(drag)的前面
        if (isBefore(selected, e.target)) {
            e.target.parentNode.insertBefore(selected, e.target)
        } else {
            e.target.parentNode.insertBefore(selected, e.target.nextSibling)
        }
    }
    function isBefore(el1, el2) {
        var cur
        if (el2.parentNode === el1.parentNode) {
            for (cur = el1.previousSibling; cur; cur = cur.previousSibling) {
                if (cur === el2) return true
            }
        } else return false
    }
    function dragEnd(e) {
        selected = null
    }

    function dragStart(e) {
        selected = e.target
    }
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [imgBeas64, setImgBeas64] = useState(false)
    const html2canvasScreenshot = () => {
        var node = document.getElementById('canvas')
        html2canvas(node).then((canvas) => {
            setImgBeas64(canvas.toDataURL('image/png'))
            // const dataImg = new Image()
            // dataImg.src = canvas.toDataURL('image/png')
            // const alink = document.createElement("a");
            // alink.href = dataImg.src;
            // alink.download = "testImg.jpg";
            // alink.click();
            setIsModalVisible(true)
        })
    }

    const onHandleCancels = () => {
        setIsModalVisible(false)
    }
    const appleList = [1, 2, 3, 4, 5, 6]
    return (
        <div className="toimg-design">
            <Button onClick={html2canvasScreenshot} type="primary">
                截图
            </Button>
            <ul id="canvas">
                {appleList.map((item) => {
                    return (
                        <li
                            className="foundation-drag"
                            draggable="true"
                            onDragStart={dragStart}
                            onDragEnd={dragEnd}
                            onDragOver={dragOver}
                            key={item}
                        >
                            {item}
                        </li>
                    )
                })}
            </ul>
            <ScreenshotModal
                imgBeas64Show={imgBeas64}
                isModalVisible={isModalVisible}
                onHandleCancel={onHandleCancels}
            />
        </div>
    )
}
