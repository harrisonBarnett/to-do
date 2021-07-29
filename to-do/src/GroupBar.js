import React from 'react';

class GroupBar extends React.Component {
    constructor() {
        super();
    };

    render() {
        return (
            <div
            className="group-bar"
            id="group-bar">
                <ul>
                    <li>recent</li>

                    {this.props.groups.map(group => 
                        
                            <li
                            className="group-bar-tab"
                            key={"group-bar-tab-"+group.id}>
                                {group.name}
                            </li>
                        
                        )}
                    <li>+ add</li>
                </ul>
            </div>
        )
    }
}

export default GroupBar;