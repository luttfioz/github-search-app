import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './App.scss';
import GithubSearchAppView from './components/GithubSearchAppView'
import AboutView from './components/AboutView'
import MapsView from './components/MapsView'
import NavBarView from './components/NavBarView';
import { routes } from './routes'

// import LoginView from './components/LoginView';
const LoginView = lazy(() => import('./components/LoginView'));
// const GithubSearchAppView = lazy(() => import('./components/GithubSearchAppView'));
// const AboutView = lazy(() => import('./components/AboutView'));

const renderNavMenu = () => {
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

function setToken(userToken) {
  localStorage.setItem('token', JSON.stringify(userToken));
  // window.location.reload();
  document.location.href = "/";

}

function getToken() {
  const tokenString = localStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const token = getToken();
  const { login, app, about, maps } = routes;

  if (!token) {
    return <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <NavBarView isLoggedIn={token} />
        <Switch>
          <Route exact path='/'>
            <LoginView setToken={setToken} />
          </Route>
          <Route exact path={login.path}>
            <LoginView setToken={setToken} />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  }

  return (
    <Router>
      {/* {this.renderNavMenu()} */}
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <NavBarView isLoggedIn={token} />
      <Switch>
        <Route exact path='/'>
          <GithubSearchAppView />
        </Route>
        <Route exact path={app.path}>
          <GithubSearchAppView />
        </Route>
        <Route exact path={about.path}>
          <AboutView />
        </Route>
        <Route exact path={maps.path}>
          <MapsView />
        </Route>
      </Switch>
      {/* </Suspense> */}
    </Router>
  );
}

export default App;
