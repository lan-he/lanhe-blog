import { Outlet, Link } from 'react-router-dom'

export default function App() {
    return (
        <div>
            <h1>Bookkeeper</h1>
            <nav>
                <Link to="/home">Invoices</Link> | <Link to="/about">Expenses</Link>
            </nav>
            <Outlet />
        </div>
    )
}
