import "./InputPage.css"
import {Link} from "react-router-dom";

function Signup () {
    return (
        <div className="inputContainer">
            <h1 className="inputHeader">Sign up with HealthBase.</h1>
            <form className="inputForm">
                <p>Please enter your organization's name:</p>
                <input type="text" name="organization" required/>  
                <p>Please enter an email address to contact:</p>
                <input type="email" name="emailaddress" required/>  
            </form>
              <Link to="/applied" className="inputSiteButton">JOIN NOW</Link>
        </div>
    )
}

export default Signup;