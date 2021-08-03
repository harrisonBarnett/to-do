const AddGroupWindow = ({closeBtn, show}) => {

    const modalClassName = show ? "add-group-window display-block" : "add-group-window display-none";
    return (
        <div
        className={modalClassName}
        onClick={closeBtn}>
            <div className="add-group-window-content"
            onClick="none">

                <div id="add-group-form">
                    <h2>form a group</h2>
                    <div id="group-input-container">
                        <label for="group-input">group: </label>
                        <input 
                        type="text"
                        name="group-input">
                        </input>
                    </div>
                    <div id="color-input-container">
                        <label for="color-input">color: </label>
                        <input 
                        type="color"
                        name="color-input">
                        </input>
                    </div>  
                </div>

                <div id="add-group-window-control">
                    <button
                    type="button"
                    id="add-group-close-btn"
                    onClick={closeBtn}>
                        x
                    </button>

                    <button
                        id="add-group-submit-button"
                        onClick={closeBtn}>
                        submit
                    </button>
                </div>

            </div>


        </div>
    )
}

export default AddGroupWindow;