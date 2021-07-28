import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import logo from './logo.svg';
import './App.scss';

import { GithubFormViewContainer } from './containers/GithubFormViewContainer'
import { GithubListViewContainer } from './containers/GithubListViewContainer'

function App() {
  return (
    <Container maxWidth="md">
      <div>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <div className="info">
            <Box className="header">Github Searcher </Box>
            <Box>Search users, repositories or issues below</Box></div>
        </div>
        <GithubFormViewContainer />
        <GithubListViewContainer />
      </div>
    </Container>
  );
}

export default App;
