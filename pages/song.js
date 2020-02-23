import React, { Component } from 'react';
const ReactMarkdown = require('react-markdown');

class Song extends Component {
  constructor(props) {
    super(props);
  }

  static getInitialProps({ query }) {
    return { query };
  }

  render() {
    const { songdata, query } = this.props;

    let result = songdata.find(song => {
      return song.number === query.id;
    });

    let lyrics = result.lyrics.map((lyric, index) => {
      if (lyric.substring(0, 2) === '>>') {
        return (
          <ReactMarkdown
            key={index}
            className='song__lyrics__row__indent'
            source={lyric}
          />
        );
      } else {
        return (
          <ReactMarkdown
            key={index}
            className='song__lyrics__row'
            source={lyric}
          />
        );
      }
    });

    return (
      <section>
        <div className='song'>
          <h2 className='song__title'>
            {result.number} - {result.title}
          </h2>
          <div className='song__meta'>
            {result.metadata.map(meta => (
              <p className='song__meta__item' key={meta}>
                {meta}
              </p>
            ))}
          </div>
          <div className='song__lyrics'>{lyrics}</div>
        </div>
      </section>
    );
  }
}

// import React from 'react';
// import { withRouter } from 'next/router';

// function Song({ router, songdata }) {
//   const query = router.asPath.substr(1);

//   let result = songdata.find(song => {
//     return song.number === query;
//   });

//   // console.log(result);
//   // console.log(router.query.id);
//   console.log(router);

//   return (
//     <>
//       <h1>{router.asPath}</h1>
//       {/* <div>
//         <h1>
//           {result.number} - {result.title}
//         </h1>
//         <div>
//           <i>
//             <ul>
//               {result.metadata.map(meta => (
//                 <li key={meta}>{meta}</li>
//               ))}
//             </ul>
//           </i>
//         </div>

//       </div> */}
//     </>
//   );
// }

export default Song;
