import DynamicList from './DynamicList';

function listPatients () {
    return (
        <div className='profileList'>
            <h1>VIEW patient information on this page</h1>
            <h1>Patients:</h1>
            {<DynamicList/>}
       </div>
    )
}

export default listPatients;