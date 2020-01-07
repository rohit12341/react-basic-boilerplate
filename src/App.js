import React from 'react';
import Dashboard from './dashboard';
import Header from './header';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';


class  App extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
  return (
    <div className="">
      <Router>
    <Header/>
    <Dashboard/>
    </Router>
    </div>
  );
  }
}

export default App;
