import './AddPatient.css'

function AddPatient({active, changeState}) {
    
    function handleClick() {
        changeState(false);
    }
    
    return (
        <div >
            <div className='modalCloseButton' onClick={handleClick}>
                <p>this is a test</p>
            </div>
            {active.toString()}

        </div>
    );
}

export default AddPatient;