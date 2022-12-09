import ListOfPatients from "../Components/PatientListBox"
import "./Database.css"
import React from 'react';

function Database(){
    return (
    <div className='patientList'>
        {<ListOfPatients/>}
    </div>
    )
}

export default Database;