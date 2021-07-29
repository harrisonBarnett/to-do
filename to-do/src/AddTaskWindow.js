const AddTaskWindow = ({closeBtn, show}) => {

    const modalClassName = show ? "add-task-window display-block" : "add-task-window display-none";
    return (
        <div
        className={modalClassName}>
            <div className="add-task-window-content">
                <button
                type="button"
                id="add-task-close-btn"
                onClick={closeBtn}>
                    x
                </button>
                <p>welcome to the add task window</p>
            </div>

        </div>
    )
}

export default AddTaskWindow;