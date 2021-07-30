import React from 'react';
import AddGroupModal from './AddGroupModal';

class GroupBar extends React.Component {
    render() {
        return (
            <div
            className="group-bar"
            id="group-bar">
                <ul>
                    <li 
                    className="group-bar-tab-active"
                    id="group-bar-tab-recent"
                    onClick = {() => this.props.swapTab("recent")}>
                        recent
                        </li>

                    {this.props.groups.map(group => 
                        
                            <li
                            className="group-bar-tab"
                            id={"group-bar-tab-"+group.name}
                            key={"group-bar-tab-"+group.id}
                            onClick= {() => this.props.swapTab(group.name)}>
                                {group.name}
                            </li>
                        
                        )}
                    <li><AddGroupModal/></li>
                </ul>
            </div>
        );
    };
}

export default GroupBar;