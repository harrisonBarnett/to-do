import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import Header from './Header';
import GroupBar from './GroupBar';
import Sidebar from './Sidebar';


class App extends React.Component {
  constructor() {
    super();
  };
  
  render() {
    return (
      <>
        <Header/>
        <GroupBar/>
        <Sidebar/>
      </>
    );
  };
}

export default App;
