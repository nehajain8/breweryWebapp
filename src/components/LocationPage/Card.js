import React, { Component } from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom';

class Card extends Component {
  render() {
    return (
        <div className = "card-container">
          <div className = "completion-rate">Completion 100%</div>
          <div className = "card-image">
          <img src= "/card-image.png" /></div>
          <div className = "brewery-Location">
            <p className = "card-label">Upland Fountain Square</p>
            <p className = "card-content">1201 Prospect St. Indianapolis, IN</p>
          </div>
          <div className = "hours">
            <p className = "card-label">Hours</p>
            <p className = "card-content">Sun - Sat 11:30AM - 8PM</p>
          </div>
          <div className = "tap-highlight">
            <p className = "card-label">Tap Highlights</p>
            <p className = "card-content">26 Taps including barrel aged, sourales, seasonals, exclusive beers year - round staples and kombucha</p>
          </div>
          <div className = "other-highlight">
            <p className = "card-label">Other Highlights</p>
            <p className = "card-content">Family Friendly, dog Friendly, (Patio):Kid Friendly; Curated Food Menu of Indiana Favs; Vegetarian Options</p>
          </div>
          <div className = "view-location-btn">
            <a href="#">View Location</a>
          </div>
        </div>
    );
  }
}

export default Card;
