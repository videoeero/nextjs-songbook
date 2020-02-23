import App from 'next/app';
import React from 'react';
import MainLayout from '../components/layouts/mainLayout';
import '../src/styles/main.scss';
import songdata from '../src/data/laulukirja';

class WebsiteApp extends App {
  constructor(props) {
    super(props);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <MainLayout>
        <Component {...pageProps} songdata={songdata} />
      </MainLayout>
    );
  }
}

export default WebsiteApp;
