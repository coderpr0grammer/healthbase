import './AddPatient.css'

function AddPatient({state, changeState}) {
    
    function handleClick() {
        changeState(false);
    }
    
    return (
        <div className={`modal, ${state ? 'modalActive' : 'modalClosed'}`}>
            <span className='modalOverlay' />
            <div className='modalBox'>
                <div className='modalCloseButton' onClick={handleClick}>
                    X
                </div>
            </div>
            {state.toString()}

        </div>
    );
}

export default AddPatient;