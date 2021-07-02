import React, { Component } from 'react';

import Gif from "./gif.jsx";

// eslint-disable-next-line react/prefer-stateless-function
class GifList extends Component {



  renderList = () => {
    // debugger
    const item = this.props.gifs.map((gif) =>  <Gif id={gif.id} key={gif.id} selectGif={this.props.selectGif} />);
    // debugger
    return item;
  }

  render() {
    return (
      <div className="gif-list">
        { this.renderList() }
      </div>
    );
  }
}


export default GifList;



// Answers
// import React from 'react';
// import Gif from './gif';

// const GifList = (props) => {
//   return (
//     <div className="gif-list">
//       {props.gifs.map(gif => <Gif id={gif} key={gif} selectGif={props.selectGif} />)}
//     </div>
//   );
// };

// export default GifList;
