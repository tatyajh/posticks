const AddNote = () => {
    return (
        <div className='note new'>
            <textarea
                rows = '4'
                cols = '4'
                placeholder='Type note...'
            ></textarea>
            <div className="note-footer">
                <small>100 Remaining</small>  
                <button className="save">SAVE</button>  
            </div>    
        </div>
    );
};

export default AddNote;