import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Switch, Route} from 'react-router-dom';
import NavBarSimp from './component/NavBar';
class App extends Component {
  render = () => {  
    return (
      <div>
        <NavBarSimp />
        <div className="container mt-3">
          <Switch>
            
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
