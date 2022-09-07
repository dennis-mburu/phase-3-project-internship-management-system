// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Route, Switch} from "react-router-dom"
import NavBar from "./components/NavBar"
import Departments from './components/Departments';
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
      <Route exact path ="/">
        <Home/>
      </Route>
    <Route exact path ="/departments">
      <Departments/>
    </Route>

      </Switch>
    </div>
  );
}

export default App;

















// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
