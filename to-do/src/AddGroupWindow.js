const AddGroupWindow = ({closeBtn, show}) => {

    const modalClassName = show ? "add-group-window display-block" : "add-group-window display-none";
    return (
        <div
        className={modalClassName}>
            <div className="add-group-window-content">
                <button
                type="button"
                id="add-group-close-btn"
                onClick={closeBtn}>
                    x
                </button>
                <p>welcome to the add task window</p>
            </div>

        </div>
    )
}

export default AddGroupWindow;