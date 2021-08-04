import EditTaskWindow from './EditTaskWindow';
import React from 'react';
import EditBtn from './images/edit_icon.svg';


class EditTaskModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    };
    showModal = () => {
        this.setState({show: true});
    };
    hideModal = () => {
        this.setState({show: false});
    };

    render() {
        return(
            <div className="edit-task-modal-container">
                <div
                id="sidebar-item-edit-btn"
                onClick={this.showModal}>
                    <img 
                    src={EditBtn}
                    alt="edit button"></img>  
                </div>
                <EditTaskWindow 
                groups={this.props.groups}
                id={this.props.id}
                content={this.props.content}
                group={this.props.group}
                color={this.props.color}
                editTask={this.props.editTask}
                show={this.state.show}
                closeBtn={this.hideModal}
                addGroup={this.props.addGroup}/>
            </div>
        )
    }

}

export default EditTaskModal;