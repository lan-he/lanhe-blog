import React, { useState, useEffect } from 'react'

export default function Test() {
    const [rotation, setRotation] = useState(0)

    useEffect(() => {
        const handleOrientation = (event) => {
            // 获取设备的 alpha 角度（相对于磁北的角度）
            const alpha = event.alpha
            setRotation(alpha)
        }

        // 检查设备是否支持方向传感器
        if (window.DeviceOrientationEvent) {
            window.addEventListener('deviceorientation', handleOrientation)
        } else {
            alert('您的设备不支持陀螺仪功能')
        }

        // 清理函数
        return () => {
            window.removeEventListener('deviceorientation', handleOrientation)
        }
    }, [])

    return (
        <div className="pt-6 text-center bg-[#fff] min-h-[100vh]">
            <div className="compass-container relative w-[200px] h-[200px] mx-auto mt-8">
                <div
                    className="compass absolute w-full h-full border-4 border-red-500 rounded-full"
                    style={{ transform: `rotate(${rotation}deg)` }}
                >
                    <div className="compass-arrow absolute top-0 left-1/2 w-2 h-[100px] bg-red-500 transform -translate-x-1/2"></div>
                    <div className="compass-text absolute top-4 left-1/2 transform -translate-x-1/2 text-sm">
                        N
                    </div>
                </div>
            </div>
            <p className="mt-4">当前方向: {Math.round(rotation)}°</p>
        </div>
    )
}
