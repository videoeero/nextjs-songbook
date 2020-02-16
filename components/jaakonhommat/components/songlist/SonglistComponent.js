import React, { Component } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom'


class SonglistComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      search: ""
    };
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(event){
    this.setState({search: event.target.value})
}

songById(id){
  const song = this.state.songs.find(song => song.number === id)
  return song
}

  render() {
    var filtered = this.state.songs.filter(song => this.state.search.toLowerCase() === song.title.substring(0, this.state.search.length).toLowerCase())
   
    return (
      <div>
        
          <div id="main">
        
            <table id="songlist">
              <tbody>
              <tr><th colSpan="2"><input id="search" placeholder="Etsi..." onChange={this.handleChange}></input></th></tr>
              <tr id="toprow"><th>Laulu</th><th>Numero</th></tr>{filtered.map((song) => (
              <tr id="tablerow" key={song.title}><th><Link id="link" to={`/song/${song.number}`}>{song.title}</Link></th><th>{song.number}</th></tr>
              ))}
              </tbody>
            </table>
        
          </div>         
      </div>
      
      )
  }
  async componentDidMount() {
    try {
      let songs = await axios.get('/laulukirjaV3.json', {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      let songdata = songs.data
      let sortedSongs= songdata.sort((a, b) => (a.number > b.number) ? 1 : -1)

      this.setState({
        ...this.state,
        ...{
          songs: sortedSongs,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }
}

export default SonglistComponent;