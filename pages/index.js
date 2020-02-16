import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import SonglistComponent from '../components/SonglistComponent';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Head>
          <meta property='og:url' content='https://findeero.now.sh' />
          <meta
            property='og:description'
            content='Portfolio / CV website of Eero Suvanto, Web & Edutech Developer'
          />
          <meta
            name='description'
            content='Portfolio / CV website of Eero Suvanto, Web & Edutech Developer'
          />
        </Head>
        <section className='me' id='me'>
          <h1>moimoi tää on etusivu</h1>
          <SonglistComponent />
        </section>
      </>
    );
  }
}

export default Home;
