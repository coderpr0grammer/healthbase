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
        </div>
    )
}

export default Login;