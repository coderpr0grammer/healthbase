import ListOfPatients from "../Components/PatientListBox"
import "./Database.css"
import "./TextScreen.css"
import React from 'react';

function Database(){
    if (true == false) { //if they are not logged in... figure out how to do this later
        return (
            <div className="textScreen">
                <h1 className="textScreenHeader">You must be logged in to view this information.</h1>
                <p className="textScreenBlurb">Please visit the home page to log in or sign up to use this service.</p>
            </div>
        )
    } else {
        return (
            <div className='patientList'>
                {<ListOfPatients/>}
            </div>
        ) 
    }
}

export default Database;