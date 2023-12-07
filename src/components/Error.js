import { useRouteError } from "react-router";

const Error = ()=>{
    const errorDetails = useRouteError();
    const {status,statusText} = errorDetails;
    return(
        <div>
            <h1>Oops!!</h1>
            <h2>Something Went Wrong</h2>
            <h3>{status}</h3>
            <h3>{statusText}</h3>
        </div>
    )
}
export default Error;