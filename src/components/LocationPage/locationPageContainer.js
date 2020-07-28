import React, { Component } from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import Card from './Card';
import CardReverse from './CardReverse';

class LocationPageContainer extends Component {
  render() {
    return (
      <div>
          <div className = "main-location-container inner-container">
          <div className = "page-heading">Locations</div>
          <div className = "breadcrumb"><span>Dashboard </span><span>&#60;</span><span> All Locations</span></div>
          <div className = "inner-content">
            <div className = "inner-title">All Locations</div>
            <Card/>
            <CardReverse/>
          </div>
          </div> 
      </div>
    );
  }
}

export default LocationPageContainer;
