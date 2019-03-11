import React, { Component } from 'react';
import Header from '../../components/Header';
import { Container } from './style';
import About from '../../components/About';
import Jobs from '../../components/Jobs';

class Main extends Component {
  render() {
    return (
      <Container>
        <Header />
        <About />
        <Jobs />
      </Container>
    );
  }
}

export default Main;
