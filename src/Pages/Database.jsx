import PatientList from '../Components/PatientList';
import PatientViewer from "../Components/PatientViewer"
import "./Database.css";
import "./TextScreen.css";
import "../Components/CheckForLogin";
import React from 'react';

function Database({user}){
    
    let patientList;

   return (
        <div className="databaseContainer">
            <div id = "PatientList">
                <PatientList />
            </div>
            <div id = "PatientViewer">
                <PatientViewer />
            </div>
       </div>
    )
}

export default Database;