import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/OrgProfile';
import Sandbox from './components/sandbox';
import Sandbox2 from './components/SideBar';
//import Nav from './components/NavBarComp';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/OrgProfile" component={Profile}/>
        <Route exact path="/Sandbox" component={Sandbox}/>
        <Route exact path="/Sandbox2" component={Sandbox2}/>
      </Switch>
        </BrowserRouter>
      <div className="App">
      </div>
      </div>
    );
  }
}

export default App;
