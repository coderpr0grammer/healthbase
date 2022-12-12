import {useState} from 'react';
import AddPatient from './AddPatient';
import "./PatientList.css"

function PatientList({user}) {

    const [modalActive, setModalState] = useState(false);

    function openPatientModal() {
        setModalState(!modalActive);
    }

    return (
        <div className="listContainer">
            <h1>Patient List</h1>
            <div className="patientList">
                {/* {patientList} */}
            </div>
            <button className={`addPatient`} onClick={openPatientModal}>
                + Add Patient
            </button>
            <AddPatient 
                state={modalActive}
                changeState={setModalState}
                user={user}
            />
        </div> 
    )
}

export default PatientList;