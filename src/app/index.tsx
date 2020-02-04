import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';
import Login from '../login';
import About from '../about';
import TApp from '../containers/TApp';
import Type from '../containers/Type/index';

const App: React.FC = () => {
  
  return (
    <div className="App">
      <Router>
        <div>
          <ul className="app-menu">
            <Link to={`${process.env.REACT_APP_BASE_URL}/`}><li>
              로그잉
            </li></Link>
            <Link to={`${process.env.REACT_APP_BASE_URL}/about`}><li>
              방구
            </li></Link>
            <Link to={`${process.env.REACT_APP_BASE_URL}/dashboard`}><li>
              잼난 일
            </li></Link>
            <Link to={`${process.env.REACT_APP_BASE_URL}/type`}><li>
              타입
            </li></Link>
          </ul>

          <hr />

          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route exact path={`${process.env.REACT_APP_BASE_URL}/`}>
              <Login />
            </Route>
            <Route path={`${process.env.REACT_APP_BASE_URL}/about`}>
              <About />
            </Route>
            <Route path={`${process.env.REACT_APP_BASE_URL}/dashboard`}>
              <TApp />
            </Route>
            <Route path={`${process.env.REACT_APP_BASE_URL}/type`}>
              <Type />
            </Route>
          </Switch>
        </div>
      </Router >
    </div >
  );
}

export default App;
