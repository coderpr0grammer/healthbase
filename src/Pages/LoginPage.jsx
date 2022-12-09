import "./LoginPage.css"

function Login () {
    return (
        <div className="loginContainer">
            <h1 className="loginHeader">Login to HealthBase.</h1>
            <div className="loginForm">
                <p>Please enter your ID:</p>
                <p>Password:</p>
            </div>
             
              <a className="loginSiteButton">LOGIN</a>
        </div>
    )
}

export default Login;