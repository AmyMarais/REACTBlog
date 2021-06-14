import { Link } from "react-router-dom"
//if it it fails to connect to the server
const NotFound = () => {
    return (  
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to="/">Back To Home ...</Link>
        </div>
    );
}
 
export default NotFound;