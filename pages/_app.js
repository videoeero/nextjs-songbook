import App from 'next/app';
import React from 'react';
import MainLayout from '../components/layouts/mainLayout';
import '../src/styles/main.scss';
import Router from 'next/router';

class WebsiteApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    );
  }
}

export default WebsiteApp;
