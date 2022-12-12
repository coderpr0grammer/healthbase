import './AddPatient.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function AddPatient({state, changeState, user}) {
    const [selectedDate, selectDate] = useState(new Date());
    const [newPatient, updatePatientInfo] = useState({
        name: null,
        healthnum: null,
        sex: 'Male',
        dob: null,
        address: null,
        notes: null
    })

    function handleClick() {
        changeState(false);
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        const tempPatient = {
            name: newPatient.name,
            healthnum: newPatient.healthnum,
            sex: newPatient.sex,
            dob: newPatient.dob,
            address: newPatient.address,
            notes: newPatient.notes
        }
        axios.post('http://localhost:3001/database/addpatient', tempPatient).then(
            console.log('happened')
        )
    }

    function handleChange(e) {
        const value = e.target.value;
        updatePatientInfo({
            ...newPatient,
            [e.target.name]: value 
        });
    }

    useEffect(() => {
        console.log(newPatient);
    })

    return (
        <div className={`modal, ${state ? 'modalActive' : 'modalClosed'}`}>
            <span className='modalOverlay' onClick={handleClick}/>
            <div className='modalBox'>
                <div className='modalCloseButton' onClick={handleClick}>
                    X
                </div>
                <h1 className="mainHeader">Add Patient Form</h1>
                <span className='divider' />
                <form className='patientForm' onSubmit={(e) => handleSubmit(e)}>
                    <label for='name' className="form-group">Patient Full Name:</label>
                    <input className="form-control" type='text' name='name' onChange={(e) => handleChange(e)} required/>
                    <label for='healthnum' className="form-group">Healthcard Number:</label>
                    <input className="form-control" type='text' name='healthnum' onChange={(e) => handleChange(e)} required/>
                    <label for='sex' className="form-group">Sex:</label>
                    <select className="form-control" name='sex' onChange={(e) => handleChange(e)} required>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                    </select>
                    <label for='dob' className="form-group">Date of Birth:</label>
                    <input className="form-control" type='date'name='dob' onChange={(e) => handleChange(e)} required/>
                    <label for='address' className="form-group">Address:</label>
                    <input className="form-control" type='text' name='address' onChange={(e) => handleChange(e)} required/>
                    <label for='notes' className="form-group">Additional Notes:</label>
                    <textarea className="form-control" type='text' name='notes' onChange={(e) => handleChange(e)}/>
                    <button type='submit'>Submit</button>
                    <button onClick={handleClick}>Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default AddPatient;