import React, { Component } from 'react';
import Navigation from '../includes/Navigation';
import Header from '../includes/Header';
import Footer from '../includes/Footer';
import Head from 'next/head';
import { PageTransition } from 'next-page-transitions';
import { withRouter } from 'next/router';

class MainLayout extends Component {
  render() {
    const { children, router } = this.props;

    return (
      <>
        <Head>
          <title>E-laulukirja</title>
          <meta
            name='keywords'
            content='asteriski,sitsilaulut,laulukirja,sitsit'
          />
          <meta property='og:title' content='E-laulukirja' />
          <meta property='og:locale' content='fi_FI' />
          <meta property='og:type' content='website' />
          {/* <meta
            property='og:image'
            content=''
          /> */}
          <meta
            property='og:description'
            content='Asteriski ry:n e-laulukirja sitsejä varten'
          />
          <meta
            name='description'
            content='Asteriski ry:n e-laulukirja sitsejä varten'
          />
        </Head>
        <div className='mainLayout_container'>
          <Navigation />
          <Header />
          <PageTransition timeout={300} classNames='page-transition'>
            {React.cloneElement(children, {
              key: router.pathname
            })}
          </PageTransition>

          <Footer />
        </div>
      </>
    );
  }
}

export default withRouter(MainLayout);
