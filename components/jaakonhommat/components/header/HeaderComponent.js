import React, { Component } from 'react';
import { Navbar} from 'react-bootstrap';
import  logo from './asteriski-logo.png'

class HeaderComponent extends Component {

  render() {
    return (
      <Navbar id="header" variant="dark" expand="lg" >

       <Navbar.Brand id="header" href="/"><img id="logo" src={logo} /><b>E-laulukirja</b></Navbar.Brand>
        
        <Navbar.Collapse id="header">
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default HeaderComponent;
