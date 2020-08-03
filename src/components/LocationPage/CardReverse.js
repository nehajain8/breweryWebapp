import React, { Component } from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom';

class CardReverse extends Component {
  render() {
    return (
        <div className = "card-container card-reverse">
          <div className = "completion-rate">Completion 100%</div>
          <div className = "known-for">Known for</div>
          <div className = "card-image">
            <img src= "/card-image.png" />
            <img src= "/card-image.png" />
            <img src= "/card-image.png" />
            <img src= "/card-image.png" />
            <img src= "/card-image.png" />
            <img src= "/card-image.png" />
          </div>  
          <div className = "front-arrow">
          <img src= "/Path 3351.png" /></div>       
        </div>
    );
  }
}

export default CardReverse;
