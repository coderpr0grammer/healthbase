import "./InputPage.css"
import {Link} from "react-router-dom";

function Login () {
    return (
        <div className="inputContainer">
            <h1 className="inputHeader">Login to HealthBase.</h1>
            <form className="inputForm">
                <p>Please enter your ID:</p>
                <input type="text" name="username" required/>  
                <p>Password:</p>
                <input type="password" name="password" required/>  
            </form>
              <Link to="/database" className="inputSiteButton">LOGIN</Link>
        </div>
    )
}

export default Login;