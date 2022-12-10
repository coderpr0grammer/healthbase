import PatientList from '../Components/PatientList';
import "./Database.css";
import "./TextScreen.css";
import "../Components/CheckForLogin";
import React from 'react';

function Database({user}){
    
    let patientList;

   return (
        <div className="databaseContainer">
            <PatientList />
        </div> 
    );
}

export default Database;