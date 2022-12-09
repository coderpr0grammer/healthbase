import "./InputPage.css"

function Login () {
    return (
        <div className="inputContainer">
            <h1 className="inputHeader">Login to HealthBase.</h1>
            <form className="inputForm" action="/database">
                <p>Please enter your ID:</p>
                <input type="text" name="username" required/>  
                <p>Password:</p>
                <input type="password" name="password" required/>  
                <input className="inputSiteButton">LOGIN</input>
            </form>
        </div>
    )
}

export default Login;