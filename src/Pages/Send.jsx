import React, {useState} from 'react';
import './Send.css'

function Send(){
    const [input, setInput] = useState({
        patientName: '',
        dateOfBirth: '',
        height: '',
        contactNumber: '',
        medicalRecordsNotes: ''
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
                <h1 className="mainHeader">Complete the Form to Store Data</h1>
                <form>
                    <h5 className="infoHeader">Patient Name</h5>
                    <div className='form-group'>
                        <input onChange={handleChange} name='patientName' value={input.name} autoComplete="off" className='form-control' placeholder="Add Patient Name"></input>
                    </div>
                    <h5 className="infoHeader">Date of Birth</h5>
                    <div className='form-group'>
                        <textarea onChange={handleChange} name='dateOfBirth' value={input.data1} autoComplete="off" className='form-control' placeHolder="YYYY-MM-DD"></textarea>
                    </div>
                    <h5 className="infoHeader">Patient Height</h5>
                    <div className='form-group'>
                        <textarea onChange={handleChange} name='height' value={input.data1} autoComplete="off" className='form-control' placeHolder="In Centimeters"></textarea>
                    </div>
                    <h5 className="infoHeader">Contact Number</h5>
                    <div className='form-group'>
                        <textarea onChange={handleChange} name='contactNumber' value={input.data1} autoComplete="off" className='form-control' placeHolder="(123) 456-7890"></textarea>
                    </div>
                    <h5 className="infoHeader">Medical Notes of Patient</h5>
                    <div className='form-group'>
                        <textarea onChange={handleChange} name='medicalRecordsNotes' value={input.data1} autoComplete="off" className='form-control' placeHolder="Medical Concerns? Updates on treatments or progress?"></textarea>
                    </div>
                    
                    <div>
                    <button onClick={handleClick} id='unique-btn' className="inputSiteButton">SAVE TO FILE</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Send;