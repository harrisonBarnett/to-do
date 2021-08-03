import React from "react";

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
                        <label htmlFor="group-input">group: 
                            <input 
                            type="text"
                            name="group-input"/>
                        </label>
                    </div>
                    <div id="color-input-container">
                        <label htmlFor="color-input">color: 
                            <input 
                            type="color"
                            name="color-input"/>
                        </label>
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
                    type="button"
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