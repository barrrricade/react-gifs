// import React, { Component } from 'react';

// import Gif from "./gif.jsx";

// // eslint-disable-next-line react/prefer-stateless-function
// class GifList extends Component {

//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }

// handleClick = (e) => {
//   console.log("e", e);
//   this.props.selectGif(e.target.value);
//   console.log("handleClick");
//   debugger
// }

// renderList = () => {
//   // debugger
//   const item = this.props.gifs.map((gif) => {
//     const gId = gif.id
//     return <Gif id={gId} key={gId} onClick={ () => console.log("click") } />
//   });
//   // debugger
//   return item;
// }

// render() {
//   return (
//     <div className="gif-list">
//       { this.renderList()
//         // this.props.gifs.map((gif) => {
//         //   return <Gif id={gif.id} key={gif.id} onClick={this.props.selectGif} />
//         // })
//       }
//     </div>
//   );
// }
// }


// export default GifList;

// Answers
import React from 'react';
import Gif from './gif';

const GifList = (props) => {
  return (
    <div className="gif-list">
      {props.gifs.map(gif => <Gif id={gif} key={gif} selectGif={props.selectGif} />)}
    </div>
  );
};

export default GifList;
