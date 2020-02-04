import React from 'react';
import {
  Switch,
  Route,
  Link,
  useLocation,
  HashRouter
} from "react-router-dom";
import './App.scss';
import Login from '../login';
import About from '../about';
import TApp from '../containers/TApp';
import Type from '../containers/Type';
import Guess from '../containers/Guess';
import Space from '../containers/Space';

const App: React.FC = () => {
  
  const url = `${process.env.REACT_APP_BASE_URL}`;

  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
        <div>
          <ul className="app-menu">
            <Link to={`/`}><li>
              로그잉
            </li></Link>
            <Link to={`/about`}><li>
              방구
            </li></Link>
            <Link to={`/dashboard`}><li>
              투두
            </li></Link>
            <Link to={`/type`}><li>
              타입
            </li></Link>
            <Link to={`/guess`}><li>
              추측
            </li></Link>
            <Link to={`/space`}><li>
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
            <Route exact path={`/`}>
              <Login />
            </Route>
            <Route path={`/about`}>
              <About />
            </Route>
            <Route path={`/dashboard`}>
              <TApp />
            </Route>
            <Route path={`/type`}>
              <Type />
            </Route>
            <Route path={`/guess`}>
              <Guess />
            </Route>
            <Route path={`/space`}>
              <Space />
            </Route>
            <Route path="*">
            <NoMatch />
          </Route>
          </Switch>
        </div>
      </HashRouter>
    </div >
  );
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  )
}

export default App;
