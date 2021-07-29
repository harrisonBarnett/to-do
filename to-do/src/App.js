import React from 'react';
import './App.css';
import Header from './Header';
import GroupBar from './GroupBar';
import Sidebar from './Sidebar';


class App extends React.Component {
  constructor() {
    super();
    this.state = {

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
        group: "work"},
        {id: 2,
        content: "eat a bug",
        date: "7/30/21",
        group: "school"},
        {id: 3,
        content: "ipsum dolor sit amet",
        date: "7/27/33",
        group: "work"},
      ],

    };
    this.swapTab = this.swapTab.bind(this);
  };

  swapTab(tabName) {   
    const prevTab = document.getElementsByClassName("group-bar-tab-active")[0];
    prevTab.classList.remove("group-bar-tab-active");
    
    const nextTab = document.getElementById("group-bar-tab-" + tabName);
    nextTab.classList.add("group-bar-tab-active");
    this.setState({
      page: tabName
    }, () => {
      console.log(this.state.page);
    });
  }


  
  render() {
    return (
      <>
        <Header/>
        <GroupBar 
        swapTab={this.swapTab}
        groups={this.state.groups}/>
        <Sidebar 
        tasks={this.state.tasks}
        page={this.state.page}/>
      </>
    );
  };
}

export default App;
