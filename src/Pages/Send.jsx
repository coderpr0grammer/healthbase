import React, {useState} from 'react';

function Send(){
    const [input, setInput] = useState({
        patientName: '',
        data1: ''
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

    function handleClick(event){
        event.preventDefault();
        console.log(input);
    }
    
    if (true == false) { //if they are not logged in... figure out how to do this later
        return (
            <div className="textScreen">
                <h1 className="textScreenHeader">You must be logged in to view this information.</h1>
                <p className="textScreenBlurb">Please visit the home page and log in or sign up to use this service.</p>
            </div>
        )
    } else {
        return (
            <div className='container'>
                <h1>Input patient information on this page</h1>
                <form>
                    <div className='form-group'>
                        <input onChange={handleChange} name='patientName' value={input.name} autoComplete="off" className='form-control' placeholder="Add Patient Name"></input>
                    </div>
                    <div className='form-group'>
                        <textarea onChange={handleChange} name='content' value={input.data1} autoComplete="off" className='form-control' placeHolder="Add Data 1"></textarea>
                    </div>
                    
                    
                    <button onClick={handleClick} className="btn btn-lg btn-info">ADD STUFF</button>
                </form>
            </div>
        )
    }
}

export default Send;