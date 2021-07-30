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
    }

    handleTaskSubmit() {
        this.props.addTask(this.state.id, this.state.content, this.state.date, this.state.group);
    }
    render() {
        return (
            <div className="content-container">
                <button onClick={this.handleTaskSubmit}>
                    click me
                </button>
            </div>
        );
    };
}

export default Content;