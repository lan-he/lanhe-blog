import React from 'react'
import { Button } from 'antd'

class Home extends React.Component {
    render() {
        return (
            <div id="my-node">
                <span>Home</span>
                <Button type="primary">Button</Button>
                <img src="https://hemingxaun-1256953833.cos.ap-shanghai.myqcloud.com/kaola.png" alt="kaola" />
            </div>
        )
    }
}
export default Home
