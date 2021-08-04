import EditTaskWindow from './EditTaskWindow';
import React from 'react';

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
            <div className="add-group-modal-container">
                <div
                className="add-group-button"
                onClick={this.showModal}>
                    + add
                </div>
                <EditTaskWindow 
                show={this.state.show}
                closeBtn={this.hideModal}
                addGroup={this.props.addGroup}/>
            </div>
        )
    }

}

export default EditTaskModal;