import { useRouteError } from 'react-router-dom'

export default function Details() {
    // const error = useRouteError()
    // console.error(error)

    return (
        <div id="error-page">
            <h1>Oops!ssssssssssssssssssssssssssssssssss</h1>
            <div className="flex justify-between">
                <div>12312</div>
                <div>12312</div>
                <div>12312</div>
            </div>
            <p>Sorry, an unexpected error has occurred.</p>
            {/* <p>
                <i>{error.statusText || error.message}</i>
            </p> */}
        </div>
    )
}
