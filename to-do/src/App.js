import React from 'react';
import './App.css';
import Header from './Header';
import GroupBar from './GroupBar';
import Sidebar from './Sidebar';
import Content from './Content';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 6,

      page: "recent",

      groups : [
        {id: 4,
        name: "work",
        color: "red"},
        {id: 5,
        name: "school",
        color: "green"},
      ],

      tasks : [
        {id: 1,
        content: "pick up drycleaning",
        date: "7/27/21",
        group: "work",
        color: "red"},
        {id: 2,
        content: "eat a bug",
        date: "7/30/21",
        group: "school",
        color: "green"},
        {id: 3,
        content: "ipsum dolor sit amet",
        date: "7/27/33",
        group: "work",
        color: "red"},
      ],

    };
    this.swapTab = this.swapTab.bind(this);
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.addGroup = this.addGroup.bind(this);
  };

  swapTab(tabName) {   
    const prevTab = document.getElementsByClassName("group-bar-tab-active")[0];
    prevTab.classList.remove("group-bar-tab-active");
    
    const nextTab = document.getElementById("group-bar-tab-" + tabName);
    nextTab.classList.add("group-bar-tab-active");
    this.setState({
      page: tabName
    }, () => {
      return;
    });
  }

  addTask(id, content, date, group, color) {
    let newID = this.state.id;

    this.setState({
      tasks: this.state.tasks.concat({
        id: newID,
        content: content,
        date: date,
        group: group,
        color: color
      })
    });

    newID++;
    this.setState({ id: newID});
  }

  removeTask(id) {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id)
    });
  }

  editTask(content) {
    console.log(content);
  }

  addGroup(id, name, color) {
    let newID = this.state.id;

    this.setState({
      groups: this.state.groups.concat({
        id: newID,
        name: name,
        color: color
      })
    });

    newID++;
    this.setState({ id: newID});
    console.log(this.state.groups);
  }
  
  render() {
    return (
      <>
        <Header/>
        <GroupBar 
        swapTab={this.swapTab}
        addGroup={this.addGroup}
        groups={this.state.groups}/>
        <Sidebar 
        removeTask={this.removeTask}
        editTask={this.editTask}
        tasks={this.state.tasks}
        page={this.state.page}/>
        <Content 
        addTask={this.addTask}
        groups={this.state.groups}/>
      </>
    );
  };
}

export default App;
