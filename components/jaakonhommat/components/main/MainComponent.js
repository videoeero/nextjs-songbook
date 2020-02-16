import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../header/HeaderComponent.js';

class MainComponent extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>{this.props.children}</Container>
      </div>
    );
  }
}

export default MainComponent;
