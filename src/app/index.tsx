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
import Type from '../containers/Type';
import Guess from '../containers/Guess';
import Space from '../containers/Space';

const App: React.FC = () => {
  
  const url = `${process.env.PUBLIC_URL}`;

  return (
    <div className="App">
      <Router>
        <div>
          <ul className="app-menu">
            <Link to={`${url}/`}><li>
              로그잉
            </li></Link>
            <Link to={`${url}/about`}><li>
              방구
            </li></Link>
            <Link to={`${url}/dashboard`}><li>
              투두
            </li></Link>
            <Link to={`${url}/type`}><li>
              타입
            </li></Link>
            <Link to={`${url}/guess`}><li>
              추측
            </li></Link>
            <Link to={`${url}/space`}><li>
              우주
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
            <Route exact path={`${url}/`}>
              <Login />
            </Route>
            <Route exact path={`${url}/about`}>
              <About />
            </Route>
            <Route exact path={`${url}/dashboard`}>
              <TApp />
            </Route>
            <Route exact path={`${url}/type`}>
              <Type />
            </Route>
            <Route exact path={`${url}/guess`}>
              <Guess />
            </Route>
            <Route exact path={`${url}/space`}>
              <Space />
            </Route>
          </Switch>
        </div>
      </Router >
    </div >
  );
}

export default App;
