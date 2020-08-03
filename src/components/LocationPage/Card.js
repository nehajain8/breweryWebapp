import React, { Component } from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import CardReverse from './CardReverse';

class Card extends Component {
  render() {
    const { card } = this.props;
    return (
      <div className = "outer-card-container">
        <div className = "card-container">
          <div className = "completion-rate">{card.completionPercent ? "Completion " + `${card.completionPercent}` + "%" : 'Completion'}</div>
          <div className = "card-image">
          <img src= "/card-image.png" /></div>
          <div className = "brewery-Location">
            <p className = "card-label">{card.breweryName || ''}</p>
            <p className = "card-content">{`${card.streetAddress ? (card.streetAddress + ' ') : ''} 
              ${card.extendedAddress ? (card.extendedAddress + ' ') : ''}
              ${card.city ? (card.city + ' ') : ''}
              ${card.stateProvinceRegion || ''}`}
            </p>
          </div>
          <div className = "hours">
            <p className = "card-label">Hours</p>
            <p className = "card-content">{card.hoursOfOperation || ''}</p>
          </div>
          <div className = "tap-highlight">
            <p className = "card-label">Tap Highlights</p>
            <p className = "card-content">{card.tapHighlights || ''}</p>
          </div>
          <div className = "other-highlight">
            <p className = "card-label">Other Highlights</p>
            <p className = "card-content">{card.otherHighlights || ''}</p>
          </div>
          <div className = "view-location-btn">
            <a href="#">View Location</a>
          </div>
          <div className = "back-arrow">
          <img src= "/Path 3338.png" /></div>
        </div>
        <CardReverse/>
      </div>
    );
  }
}

export default Card;
