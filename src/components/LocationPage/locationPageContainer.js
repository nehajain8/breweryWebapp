import React, { Component } from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import getBreweryLocation from '../actions/getBreweryLocation';
import { getCards } from '../reducers/reducer';
import Card from './Card';
//import CardReverse from './CardReverse';

class LocationPageContainer extends Component {
  state = {
    value: 'All'
  }
  change = (event) => {
    this.setState({value: event.target.value});
  }
  componentDidMount() {
    const {fetchCards} = this.props;
    fetchCards();
  }
  render() {
    const { cards } = this.props;
    const facilityTypeList = ['All','Production Facility', 'Tap/Tasting Room', 'BrewPub', 'Restaurant/Brewhouse'];
    return (
      <div>
          <div className = "main-location-container inner-container">
          <div className = "page-heading">Locations</div>
          <div className = "breadcrumb"><span>Dashboard </span><span>&#60;</span><span> All Locations</span></div>
          <div className = "inner-content">
            <div className = "inner-title">All Locations</div>
            <div className = "filter-text">Filter & Sort</div>
            <div className = "filter-outer-container">
            <div class = "filter-containers">
                <p className = "filter-heading">Facility Type</p>
                <select className = "brewery-select" id="lang" defaultValue = "All" onChange={this.change.bind(this)} value={this.state.value}>
                    {
                      facilityTypeList.map(facility =>
                        <option value={facility}>{facility}</option>
                      )
                    }
                </select>
            </div>
            <div class = "filter-containers">
                <p className = "filter-heading">Sort by</p>
                <select className = "brewery-select" id="lang" defaultValue = "All" onChange={this.change.bind(this)} value={this.state.value}>
                    {
                      facilityTypeList.map(facility =>
                        <option value={facility}>{facility}</option>
                      )
                    }
                </select>
            </div>
            <div className = "add-location-btn">
              <a href="#">Add Location</a>
            </div>
            </div>
            <div className = "cards-list">
            {
              cards.map(
                card => <Card card = {card} />
              )
            }
            </div>
          </div>
          </div> 
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cards: getCards(state),
})


const mapDispatchToProps = dispatch => ({
  fetchCards: () => dispatch(getBreweryLocation),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationPageContainer);
