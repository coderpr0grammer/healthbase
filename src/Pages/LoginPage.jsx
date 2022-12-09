import "./InputPage.css"

function Login () {
    return (
        <div className="inputContainer">
            <h1 className="inputHeader">Login to HealthBase.</h1>
            <div className="inputForm">
                <p>Please enter your ID:</p>
                <input type="text" name="username" required/>  
                <p>Password:</p>
                <input type="password" name="password" required/>  
            </div>
              <a className="inputSiteButton" href="/database">LOGIN</a>
        </div>
    )
}

export default Login;