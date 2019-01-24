import React, { Component, Fragment } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Main from './pages/Main';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Main />
      </Fragment>
    );
  }
}

export default App;
