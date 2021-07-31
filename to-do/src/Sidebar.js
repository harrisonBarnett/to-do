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
                            <div
                            id="sidebar-item-accent"
                            style={{background: task.color}}></div>

                            <div id="sidebar-item-content-container">
                                <p id="sidebar-item-date">{task.date}</p>
                                <p id="sidebar-item-content">{task.content}</p>
                                <p id="sidebar-item-group">{task.group}</p>
                            </div>

                            <div id="sidebar-item-control">
                                <button>x</button>
                                <button>[edit]</button>
                            </div>
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
                    
                    {tasks.filter(task => task.group === page).map(filteredTask =>
                        <li
                        className="sidebar-item"
                        key={"sidebar-item-"+filteredTask.id}>
                            <div
                            id="sidebar-item-accent"
                            style={{background: filteredTask.color}}></div>
                            
                            <div id="sidebar-item-content-container">
                                <p id="sidebar-item-date">{filteredTask.date}</p>
                                <p id="sidebar-item-content">{filteredTask.content}</p>
                                <p id="sidebar-item-group">{filteredTask.group}</p>
                            </div>

                            <div id="sidebar-item-control">
                                <button>x</button>
                                <button>[edit]</button>
                            </div>
                        </li>
                        )}              
                </ul>
            </div>
        )
    }
}

export default Sidebar;