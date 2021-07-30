import React from 'react';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            content: "eat a corndog",
            date: "7/30/21",
            group: "work"
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
        this.setState({group: event.target.value});
    };
    handleTaskSubmit(event) {
        event.preventDefault();
        this.props.addTask(this.state.id, this.state.content, this.state.date, this.state.group);
    }
    render() {
        return (
            <div className="content-container">
                <input type="text"
                onChange={this.handleContent}>

                </input>
                <input type="date"
                onChange={this.handleDate}>
                </input>

                <select 
                name="add-task-groups-dropdown" 
                onChange={this.handleGroup}>
                    <option value="work">Work</option>
                    <option value="school">School</option>
                </select>

                <button onClick={this.handleTaskSubmit}>
                    click me
                </button>
            </div>
        );
    };
}

export default Content;