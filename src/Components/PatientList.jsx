import {useState} from 'react';
import AddPatient from './AddPatient';

function PatientList() {

    const [modalActive, setModalState] = useState(false);

    function openPatientModal() {
        setModalState(!modalActive);
    }

    return (
        <div className="listContainer">
            <div className="patientList">
                {/* {patientList} */}
            </div>
            {modalActive.toString()}
            <button className={`addPatient`} onClick={openPatientModal}>
                + Add Patient
            </button>
            <AddPatient 
                state={modalActive}
                changeState={setModalState}
            />
        </div> 
    )
}

export default PatientList;