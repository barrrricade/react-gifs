// import React, { Component } from 'react';
// import giphy from 'giphy-api';

// import SearchBar from './search_bar.jsx';
// import GifList from './gif_list.jsx';
// import Gif from './gif.jsx';

// const GIPHY_API_KEY = "7ZGEpRGzH3xHH45eZTNMDZ9x05wlRCzV";


// // eslint-disable-next-line react/prefer-stateless-function
// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       gifs: [],
//       selectedGifId: "8cgqFlUYWOdmqmsTbr"
//     };

//     this.selectGif = this.selectGif.bind(this);
//   }

//   search = (query) => {
//     // API call
//     giphy("1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm").search({
//       q: query,
//       rating: "g",
//       limit: 15
//     }, (error, result) => {
//       this.setState({ gifs: result.data });
//     });
//   }

//   selectGif = (id) => {
//     // debugger
//     console.log("onclick");
//     this.setState({
//       selectedGifId: id
//     });
//   }

//   // search(query) {
//   //   const giphEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${query}&limit=10`;
//   //   fetch(giphEndpoint).then(response => response.json()).then((data) => {
//   //     // console.log("data", data);
//   //     const gifs = data.data.map(giph => giph.id);
//   //     this.setState({
//   //       gifs: gifs
//   //     });
//   //   });
//   // }

//   render() {
//     // const gifs = [
//     //   { id: "cdNSp4L5vCU7aQrYnV" },
//     //   { id: "g96QRNjWUvdKw" }
//     // ];
//     // debugger

//     return (
//       <div>
//         <div className="left-scene">
//           <SearchBar searchFunction={this.search}/>
//           <div className="selected-gif">
//             <Gif id={this.state.selectedGifId} />
//           </div>
//         </div>
//         <div className="right-scene">
//           <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
//         </div>
//       </div>
//     );
//   }
// }


// export default App;


// ANSWERS

import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const GIPHY_API_KEY = '1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "xT9IgDEI1iZyb2wqo8"
    };
    this.search = this.search.bind(this);
    this.selectGif = this.selectGif.bind(this);
  }

  search(query) {
    const giphEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${query}&limit=10`
    fetch(giphEndpoint).then(response => response.json()).then((data) => {
      const gifs = data.data.map(giph => giph.id)
      this.setState({
        gifs: gifs
      })
    })
  }

  selectGif(id) {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
