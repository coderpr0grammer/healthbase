import {useState} from 'react';
import AddPatient from './AddPatient';
import axios from 'axios';
import './PatientList.css'

function PatientList({user, currentPatient}) {
    const [selectedPatient, changeSelectedPatient] = useState();
    const [modalActive, setModalState] = useState(false);

    function openPatientModal() {
        setModalState(!modalActive);
    }

    function handleClick(patient) {
        changeSelectedPatient(patient);
    }

    async function getPatientList() {
        let patientList = axios.get('localhost:3001/getpatients').then(
            console.log('Succesfully retrieved ')
        );

    }

    return (
        <div className="listContainer">
            <h1>Patient List</h1>
            <div className="patientList">
                {/* {patientList} */}
            </div>
            <div className={'addPatient patientContainer'} onClick={openPatientModal}>
                + Add Patient
            </div>
            <AddPatient 
                state={modalActive}
                changeState={setModalState}
                user={user}
            />
        </div> 
    )
}

export default PatientList;