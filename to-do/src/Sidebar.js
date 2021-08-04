import React from 'react';
import DeleteBtn from './images/delete_icon.svg';
import EditTaskModal from './EditTaskModal'

const Sidebar = ({removeTask, editTask, tasks, page}) => {
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

                                <div id="sidebar-item-control">
                                    <p id="sidebar-item-group">{task.group}</p>

                                    <EditTaskModal
                                    editTask={editTask}
                                    id={task.id}/>
                                    
                                    <div
                                    id="sidebar-item-remove-btn"
                                    onClick={() => {removeTask(task.id)}}>
                                        <img 
                                        src={DeleteBtn}
                                        alt="delete button"></img>
                                    </div>
                                </div>
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

                                <div id="sidebar-item-control">
                                    <p id="sidebar-item-group">{filteredTask.group}</p>

                                    <EditTaskModal
                                    editTask={editTask}
                                    id={filteredTask.id}/>
                                    
                                    <div
                                    id="sidebar-item-remove-btn"
                                    onClick={() => {removeTask(filteredTask.id)}}>
                                        <img 
                                        src={DeleteBtn}
                                        alt="delete button"></img>
                                    </div>
                                </div>
                            </div>

                        </li>
                        )}              
                </ul>
            </div>
        )
    }
}

export default Sidebar;