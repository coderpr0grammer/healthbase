import React from 'react';
import DynamicList from '../Components/DynamicList';

function Database(){
    return (
    <div className='container'>
        <h1>VIEW patient information on this page</h1>
        <h1>Patients:</h1>
        {<DynamicList/>}
    </div>
    )
}

export default Database;