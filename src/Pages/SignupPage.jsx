import "./InputPage.css"
import {useState} from 'react'
import {Link} from 'react-router-dom';
import sha256 from 'js-sha256'

function Signup() {
    const [input, changeInput] = useState({
        username: null,
        password: null
    })

    const handleSubmit = event => {
        // todo pass input into axios get req, validate login, pass login info back up
        event.preventDefault();
        changeInput({
            username: sha256(input.username),
            username: sha256(input.password)
        })

    }

    const handleChange = event => {
        const value = event.target.value;
        changeInput({
            ...input,
            [event.target.name]: value 
        });
    }

    return ( 
        <div className="inputContainer">
            <h1 className="inputHeader">Sign up with HealthBase.</h1>
            <form className="inputForm" action="/applied" onSubmit={handleSubmit}>
                <p>Enter your email:</p>
                <input className="inputTextBox" type="email" name="email" onChange={handleChange} required/>  
                <p>Create a password:</p>
                <input className="inputTextBox" type="password" name="password" onChange={handleChange} required/>  
                <input className="inputSiteButton" type="submit" value="JOIN NOW" onChange={handleChange}/>
            </form>
            <Link to="/login" className="redirectLink">Already have an account? Click here to login.</Link>
        </div>
    )
}

export default Signup;