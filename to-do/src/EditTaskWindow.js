import React from "react";

class EditTaskWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            content: "",
            date: "",
            group: "",
            color: ""
        }
        this.handleEditTaskSubmit = this.handleEditTaskSubmit.bind(this);
        this.handleContent = this.handleContent.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleGroup = this.handleGroup.bind(this);
    };
    handleContent(event) {
        this.setState({name: event.target.value});
    };
    handleDate(event) {
        this.setState({color: event.target.value});
    };
    handleGroup(event) {
        this.setState({color: event.target.value,
            group: event.target.options[event.target.selectedIndex].text})
    }
    handleEditTaskSubmit(event) {
        event.preventDefault();
        this.props.editTask(this.props.content);
        this.props.closeBtn();
    }

    render() {
        const modalClassName = this.props.show ? "edit-task-window display-block" : "edit-task-window display-none";

        return (
            <div
            className={modalClassName}>
                <div className="edit-task-window-content">
    
                    <div id="edit-task-form">
                        <h2>change your mind?</h2>
                        <div id="task-input-container">
                            <label htmlFor="task-input">task: 
                                <input
                                value={this.state.name}
                                placeholder={this.props.content} 
                                type="text"
                                name="task-input"
                                onChange={this.handleContent}/>
                            </label>
                        </div>

                        <div id="date-input-container">
                            <label htmlFor="date-input">due: </label>
                            <input 
                            value={this.state.date}
                            type="date"
                            name="date-input"
                            onChange={this.handleDate}>
                            </input>
                        </div>

                        <div id="group-input-container">
                            <label htmlFor="add-task-groups-dropdown">group: </label>
                            <select                         
                            name="add-task-groups-dropdown" 
                            onChange={this.handleGroup}>
                                <option 
                                disabled
                                selected={true}> 
                                -- select an option -- 
                                </option>

                                {this.props.groups.map(group => 
                                    <option
                                    // color is passed as value of each option
                                    value={group.color}
                                    key={group.id}>
                                    {group.name}
                                    </option>    
                                    )}

                            </select>
                        </div>
                        
                    </div>
    
                    <div id="edit-task-window-control">
                        <button
                        type="button"
                        id="edit-task-close-btn"
                        onClick={this.props.closeBtn}>
                            x
                        </button>
    
                        <button
                        type="button"
                        id="edit-task-submit-button"
                        onClick={this.handleEditTaskSubmit}>
                            submit
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditTaskWindow;