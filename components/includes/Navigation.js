import React, { Component } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <nav className='nav'>
          <Link href='/'>
            <a>
              <img className='nav__logo' src='/img/logo.png' alt='Etusivu' />
            </a>
          </Link>
          <p className='nav__item'>Tää on navigaatio</p>
        </nav>
      </>
    );
  }
}

export default withRouter(Navigation);
