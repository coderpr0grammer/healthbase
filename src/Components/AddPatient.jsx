import './AddPatient.css'

function AddPatient({state, changeState}) {
    
    function handleClick() {
        changeState(false);
    }
    
    return (
        <div className={`modal ${state ? 'modalActive' : 'modalClosed'}`}>
            <div className='modalCloseButton' onClick={handleClick}>
                <p>this is a test</p>
            </div>
            {state.toString()}

        </div>
    );
}

export default AddPatient;