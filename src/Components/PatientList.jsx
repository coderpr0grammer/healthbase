import {useState} from 'react';


function PatientList() {

    const [modalActive, setModalState] = useState(false);

    function openPatientModal() {
        setModalState(!modalActive);
    }

    return (
        <div className="listContainer">
            <div className="patientList">
                {patientList}
            </div>
            <button className={`addPatient ${modalActive ? disabled : ''}`} onClick={openPatientModal}>
                + Add Patient
            </button>
        </div> 
    )
}

export default PatientList;