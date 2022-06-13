import React from 'react'
import { Button } from 'antd'

class Home extends React.Component {
    render() {
        return (
            <div id="my-node">
                <span>Home</span>
                <Button onClick={this.dwiajij} type="primary">
                    Button
                </Button>
                <Button onClick={this.html2canvasDemo} type="primary">
                    Button2
                </Button>
            </div>
        )
    }
}
export default Home
