import "./InputPage.css"

function Signup () {
    return (
        <div className="inputContainer">
            <h1 className="inputHeader">Sign up with HealthBase.</h1>
            <form className="inputForm" action="/applied">
                <p>Please enter your organization's name:</p>
                <input type="text" name="organization" required/>  
                <p>Please enter an email address to contact:</p>
                <input type="text" name="emailaddress" required/>  
                <input className="inputSiteButton">JOIN NOW</input>
            </form>
        </div>
    )
}

export default Signup;