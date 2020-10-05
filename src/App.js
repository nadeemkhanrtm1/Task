import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import './App.css';
import Login from "./component/Login";
import SignUp from './component/SignUp';
import Taskbar from './component/Taskbar';
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignUp}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/taskbar" component={Taskbar}/>
      </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
