import "./InputPage.css"
import React, {useState} from 'react';

function Login () {
    const [input, setInput] = useState({
        username: '',
        password: ''
    })

    function handleChange(event){
        const {name, value} = event.target;

        setInput(prevInput => {
            return{
                ...prevInput,
                [name]: value
            }
        })
    }
    
    return (
        <div className="inputContainer">
            <h1 className="inputHeader">Login to HealthBase.</h1>
            <form className="inputForm" action="/database">
                <p>Please enter your ID:</p>
                <input className = "inputTextBox" type="text" onChange={handleChange} value={input.username} name="username" required/>  
                <p>Password:</p>
                <input className = "inputTextBox" type="password" onChange={handleChange} value={input.password} name="password" required/>  
                <input className="inputSiteButton" type="submit" value="LOGIN"/>
            </form>
        </div>
    )
}

export default Login;