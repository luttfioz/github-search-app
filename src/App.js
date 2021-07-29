import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.scss';

import GithubSearchAppView from './components/GithubSearchAppView'
import AboutView from './components/AboutView'
import { routes } from './routes'
import NavBarView from './components/NavBarView';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  renderNavMenu = () => {
    const { login, app, about, maps } = routes;

    return (
      <>
        <ul>
          <li>
            <Link to={login.path}>{login.title}</Link>
          </li>
          <li>
            <Link to={app.path}>{app.title}</Link>
          </li>
          <li>
            <Link to={about.path}>{about.title}</Link>
          </li>
          <li>
            <Link to={maps.path}>{maps.title}</Link>
          </li>
        </ul>
      </>
    )
  }

  render() {
    const { login, app, about, maps } = routes;

    return (
      <Router>
        {/* {this.renderNavMenu()} */}
        <NavBarView />
        <Switch>
          <Route exact path={login.path}>
            <GithubSearchAppView />
          </Route>
          <Route exact path={app.path}>
            <GithubSearchAppView />
          </Route>
          <Route exact path={about.path}>
            <AboutView />
          </Route>
          <Route exact path={maps.path}>
            <GithubSearchAppView />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
