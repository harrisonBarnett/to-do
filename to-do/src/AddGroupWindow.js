import React from "react";

class AddGroupWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            color: ""
        }
        this.handleGroupSubmit = this.handleGroupSubmit.bind(this);
        this.handleGroupName = this.handleGroupName.bind(this);
        this.handleGroupColor = this.handleGroupColor.bind(this);
    };
    handleGroupName(event) {
        this.setState({name: event.target.value});
    };
    handleGroupColor(event) {
        this.setState({color: event.target.value});
    };

    handleGroupSubmit(event) {
        event.preventDefault();
        this.props.addGroup(this.state.id, this.state.name, this.state.color);
        this.setState({id: "", name: "", color: ""})
        this.props.closeBtn();
    }

    render() {
        const modalClassName = this.props.show ? "add-group-window display-block" : "add-group-window display-none";

        return (
            <div
            className={modalClassName}>
                <div className="add-group-window-content">
    
                    <div id="add-group-form">
                        <h2>form a group</h2>
                        <div id="group-input-container">
                            <label htmlFor="group-input">group: 
                                <input
                                value={this.state.name} 
                                type="text"
                                name="group-input"
                                onChange={this.handleGroupName}/>
                            </label>
                        </div>
                        <div id="color-input-container">
                            <label htmlFor="color-input">color: 
                                <input 
                                value={this.state.color}
                                type="color"
                                name="color-input"
                                onChange={this.handleGroupColor}/>
                            </label>
                        </div>  
                    </div>
    
                    <div id="add-group-window-control">
                        <button
                        type="button"
                        id="add-group-close-btn"
                        onClick={this.props.closeBtn}>
                            x
                        </button>
    
                        <button
                        type="button"
                        id="add-group-submit-button"
                        onClick={this.handleGroupSubmit}>
                            submit
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddGroupWindow;