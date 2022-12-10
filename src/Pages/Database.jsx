import ListOfPatients from "../Components/PatientListBox"
import "./Database.css"
import "./TextScreen.css"
import "../Components/CheckForLogin"
import React from 'react';

function Database(){
    if (/*checkLoginState()*/ false) { //if the are logged in... figure out how to do this later
        return (
            <div className='patientList'>
                {<ListOfPatients/>}
            </div>
        ) 
    } else {
        return (
            <div className="textScreen">
                <h1 className="textScreenHeader">You must be logged in to view this information.</h1>
                <p className="textScreenBlurb">Please visit the home page and log in or sign up to use this service.</p>
            </div>
        )
    }
}

export default Database;