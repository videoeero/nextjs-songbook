import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      search: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    try {
      let sortedSongs = this.props.songdata.sort((a, b) =>
        a.number > b.number ? 1 : -1
      );
      this.setState({
        ...this.state,
        ...{
          songs: sortedSongs
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  songById(id) {
    const song = this.state.songs.find(song => song.number === id);
    return song;
  }

  render() {
    const { songdata } = this.props;

    var filtered = songdata.filter(
      song =>
        this.state.search.toLowerCase() ===
        song.title.substring(0, this.state.search.length).toLowerCase()
    );

    return (
      <>
        <Head>
          <meta property='og:url' content='https://laulukirja.asteriski.fi' />
          <meta property='og:description' content='Asteriski ry:n laulukirja' />
          <meta name='description' content='Asteriski ry:n laulukirja' />
        </Head>
        <section>
          <div className='songlist'>
            <div className='songlist__search'>
              <input
                id='search'
                placeholder='Etsi...'
                onChange={this.handleChange}
              ></input>
            </div>

            {filtered.map(song => (
              <Link
                key={song.number}
                href={`/song/[song]`}
                as={`/song/${song.number}`}
              >
                {/* <Link key={song.number} href={`/${song.number}`}> */}
                <a className='songlist__item'>
                  <span className='songlist__item__number'>{song.number}</span>
                  <span className='songlist__item__title'>{song.title}</span>
                </a>
              </Link>
            ))}
          </div>

          {/* <SonglistComponent laulukirja={laulukirja} /> */}
        </section>
      </>
    );
  }
}

export default Home;
