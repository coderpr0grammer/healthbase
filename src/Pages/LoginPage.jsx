<<<<<<< HEAD
function Login () {
    return (
        <div className="loginContainer">
            <div className="loginHeader">
                <h1>Login to HealthBase.</h1>
            </div>
            <div className="loginForm">
                <p>Please enter your identification:</p>
                <p>Password:</p>
            </div>
            <div className="button">
                <a className="loginButton" href="/login ">LOGIN</a>
            </div>
=======
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
>>>>>>> 503c690bd926e1b78e9af7488e41f9aed979a22c
        </div>
    )
}

export default Login;