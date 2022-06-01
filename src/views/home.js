import { useLocation } from 'react-router-dom'

const Home = () => {
    const { from, pathname } = useLocation()
    return (
        <div>
            这里是卡拉云的网站，你当前在 {pathname}，你是从 {from} 跳转过来的
        </div>
    )
}
export default Home
