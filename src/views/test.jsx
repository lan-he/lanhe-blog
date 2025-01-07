import React, { useState, useEffect } from 'react'

export default function Details() {
    return (
        <div className="pt-6 text-center bg-[#F5F2FF] min-h-[100vh]">
            <p className="text-[40px]">何贵成专属视频</p>
            <video src=""></video>

            <video width="600" controls>
                <source
                    src="https://hemingxaun-1256953833.cos.ap-shanghai.myqcloud.com/1%E6%9C%887%E6%97%A5.mp4"
                    type="video/mp4"
                />
            </video>
        </div>
    )
}
