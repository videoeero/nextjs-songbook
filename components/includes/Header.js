import React, { Component } from 'react';
import { withRouter } from 'next/router';

class Header extends Component {
  render() {
    return (
      <>
        <header className='header'>
          <h1 className='heading__h1'>Asteriskin e-laulukirja</h1>
        </header>
      </>
    );
  }
}

export default withRouter(Header);
