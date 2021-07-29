import AddTaskWindow from './AddTaskWindow';
import React from 'react';

class AddTaskModal extends React.Component {
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
            <div className="add-task-modal-container">
                <div
                className="add-task-button"
                onClick={this.showModal}>
                    + add
                </div>
                <AddTaskWindow 
                show={this.state.show}
                closeBtn={this.hideModal}/>
            </div>
        )
    }

}

export default AddTaskModal;