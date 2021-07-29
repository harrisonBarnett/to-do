import React from 'react';

const Sidebar = ({tasks, page}) => {
    if(page === "recent") {
        return (
            <div
            className="task-sidebar"
            id="task-sidebar">
                <ul>
                    {tasks.map(task => 
                        <li
                        className="sidebar-item"
                        key={"sidebar-item-"+task.id}>
                            <p id="sidebar-item-date">{task.date}</p>
                            <p id="sidebar-item-content">{task.content}</p>
                            <p id="sidebar-item-group">{task.group}</p>
                        </li>
                    )}                   
                </ul>
            </div>
        )
    } else {
        return (
            <div
            className="task-sidebar"
            id="task-sidebar">
                <ul>
                    
                    {tasks.filter(task => task.group == page).map(filteredTask =>
                            <li
                            className="sidebar-item"
                            key={"sidebar-item-"+filteredTask.id}>
                                <p id="sidebar-item-date">{filteredTask.date}</p>
                                <p id="sidebar-item-content">{filteredTask.content}</p>
                                <p id="sidebar-item-group">{filteredTask.group}</p>
                            </li>
                        )}              
                </ul>
            </div>
        )
    }
}

export default Sidebar;