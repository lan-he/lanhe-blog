import React from 'react'
import './toimg-design.less'

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
    const appleList = [1, 2, 3, 4, 5, 6]
    return (
        <div className="toimg-design">
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
        </div>
    )
}
