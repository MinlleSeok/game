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

const App: React.FC = () => {

  return (
    <div className="App">
      <Router>
        <div>
          <ul className="app-menu">
            <Link to={`${process.env.REACT_BASE_URL}/`}><li>
              Home
            </li></Link>
            <Link to={`${process.env.REACT_BASE_URL}/about`}><li>
              about
            </li></Link>
            <Link to={`${process.env.REACT_BASE_URL}/dashboard`}><li>
              Dashboard
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
            <Route exact path={`${process.env.REACT_BASE_URL}/`}>
              <Login />
            </Route>
            <Route path={`${process.env.REACT_BASE_URL}/about`}>
              <About />
            </Route>
            <Route path={`${process.env.REACT_BASE_URL}/dashboard`}>
              <Login />
            </Route>
          </Switch>
        </div>
      </Router >
    </div >
  );
}

export default App;
