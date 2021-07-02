import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const image = `https://media.giphy.com/media/${this.props.id}/giphy/200w.gif`;
    return (
      <img src={image} alt="" className="gif" />
    );
  }

}

export default Gif;
