function addPatient({active}) {
    
    return (
        <div className={`patientAddModal ${active ? modalActive : ''}`}>
            <div className='modalCloseButton'>
                X
            </div>
            <form>
                
            </form>

        </div>
    );
}