import React from 'react';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            content: "",
            date: "",
            group: "",
            color: ""
        }      
        this.handleTaskSubmit = this.handleTaskSubmit.bind(this);
        this.handleContent = this.handleContent.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleGroup = this.handleGroup.bind(this);
    };
    handleContent(event) {
        this.setState({content: event.target.value});
    };
    handleDate(event) {
        this.setState({date: event.target.value});
    };
    handleGroup(event) {
        this.setState({color: event.target.value, 
            group: event.target.options[event.target.selectedIndex].text
        });
    };

    handleTaskSubmit(event) {
        event.preventDefault();
        this.props.addTask(this.state.id, this.state.content, this.state.date, this.state.group, this.state.color);
    }
    render() {
        return (
            <div className="content-container">
                <div id="add-task-form">
                    <h2>hold that thought</h2>
                    
                    <div id="task-input-container">
                        <label for="task-input">task:</label>
                        <input 
                        type="text"
                        name="task-input"
                        onChange={this.handleContent}>
                        </input>
                    </div>

                    <div id="date-input-container">
                        <label for="date-input">due: </label>
                        <input 
                        type="date"
                        name="date-input"
                        onChange={this.handleDate}>
                        </input>
                    </div>

                    <div id="group-input-container">
                        <label for="add-task-groups-dropdown">group: </label>
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
                    <button onClick={this.handleTaskSubmit}>
                        submit
                    </button>
                </div>
            </div>
        );
    };
}

export default Content;