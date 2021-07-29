import React from 'react';
import AddTaskModal from './AddTaskModal';

const Sidebar = ({tasks, page}) => {
    if(page === "recent") {
        return (
            <div
            className="task-sidebar"
            id="task-sidebar">
                <ul>
                    <li>
                        <AddTaskModal/>
                    </li>

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
                    <li>
                        <AddTaskModal/>
                    </li>

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
    }
}

export default Sidebar;