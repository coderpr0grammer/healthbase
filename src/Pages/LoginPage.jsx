import "./InputPage.css"
import {useState} from 'react';
import {Link} from 'react-router-dom';
import sha256 from 'js-sha256';
import axios from 'axios';

function Login ({user}) {
    const [input, changeInput] = useState({
        username: null,
        password: null
    })

    const [passStatus, changePassStatus] = useState()

    const handleSubmit = event => {
        // todo pass input into axios get req, validate login, pass login info back up
        event.preventDefault();
        axios.post("/login", {
            username: input.username,
            password: input.password
        })
        .then((response) => {
            if (response.status == 200) {
                user = input
            }
            else {
                changePassStatus(false)
            }
        })

    }

    const handleChange = event => {
        const value = event.target.value;
        changeInput({
            ...input,
            [event.target.name]: sha256(value) 
        });
    }
    
    return (
        <div className="inputContainer">
            <h1 className="inputHeader">Login to HealthBase.</h1>
            <form className="inputForm" onSubmit={handleSubmit}>
                <p>Please enter your ID:</p>
                <input className = "inputTextBox" type="text" onChange={handleChange} name="username" required/>  
                <p>Password:</p>
                <input className = "inputTextBox" type="password" onChange={handleChange} name="password" required/>  
                <input className="inputSiteButton" type="submit" value="LOGIN"/>
            </form>
            <p className={`passStatus ${passStatus==false ? 'incorrect' : ''}`}>Invalid login credentials. Please try again.</p>
            <Link to="/signup" className="redirectLink">Don't have an account yet? Click here to sign up.</Link>
        </div>
    )
}

export default Login;