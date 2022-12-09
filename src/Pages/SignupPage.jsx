import "./InputPage.css"

function Signup () {
    return (
        <div className="inputContainer">
            <h1 className="inputHeader">Sign up with HealthBase.</h1>
            <div className="inputForm">
                <p>Please enter your organization's name:</p>
                <input type="text" name="organization" required/>  
                <p>Please enter an email address to contact:</p>
                <input type="email" name="emailaddress" required/>  
            </div>
              <a className="inputSiteButton" href="/applied">JOIN NOW</a>
        </div>
    )
}

export default Signup;