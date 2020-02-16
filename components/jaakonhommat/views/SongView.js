import React, { Component } from 'react';
import MainComponent from '../components/main/MainComponent.js';
import axios from 'axios'
const ReactMarkdown = require('react-markdown')

class SongView extends Component {

  constructor(props){
    super(props)
    this.state = {
      song: null
    }
  }
  
    
    async componentDidMount() {
      try {
        let songs = await axios.get('/laulukirjaV3.json', {
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        let songdata = songs.data
        let song = songdata.find(song => song.number === this.props.match.params.number)
    
        this.setState({
          ...this.state,
          ...{
            song: song,
          },
        });
      } catch (e) {
        console.log(e);
      }
    
  }
  render() {

    if(this.state.song === null){
      return(
        <MainComponent>
          Loading...
        </MainComponent>
      )
    }

    var lyrics = this.state.song.lyrics.map((lyric, index) => {
      if(lyric.substring(0,2) === ">>"){
        return <li key={index} id="indent"><ReactMarkdown source={lyric} /></li>
      }else{
        return <li key={index}><ReactMarkdown source={lyric} /></li>
      }
    })
    
      return (
        <MainComponent>
          <div id="song">
            <h1>{this.state.song.number} - {this.state.song.title}</h1>
            <div><i><ul>{this.state.song.metadata.map(meta => (<li key={meta}>{meta}</li>))}</ul></i></div>
            <ul>
              {lyrics}
            </ul>
          </div>
        </MainComponent>
      )
    }
    
  
}

export default SongView;
