import React, { Component } from 'react';
import MainComponent from '../components/main/MainComponent.js';
import SonglistComponent from '../components/songlist/SonglistComponent.js';

class HomeView extends Component {
  render() {
    return (
      <MainComponent>
        
        
        <SonglistComponent />
      </MainComponent>
    );
  }
}

export default HomeView;
