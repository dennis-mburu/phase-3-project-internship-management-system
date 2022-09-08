import './App.css';
import React from 'react';
import {Route, Switch} from "react-router-dom"
import NavBar from "./components/NavBar"
import Departments from './components/Departments';
import Home from "./components/Home"
import Interns from './components/Interns';
import Supervisors from './components/Supervisors';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" >
      <NavBar />
    <div className="main">
      <Switch>
        <Route exact path ="/">
          <Home/>
        </Route>
        <Route path ="/departments">
          <Departments/>
        </Route>
        <Route exact path ="/interns">
          <Interns/>
        </Route>
        <Route  path ="/supervisors">
          <Supervisors/>
        </Route>

      </Switch>
    </div>

    </div>
  );
}

export default App;


















