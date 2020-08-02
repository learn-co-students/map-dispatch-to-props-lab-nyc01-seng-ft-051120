import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux';

export class RestaurantInput extends Component {

  state = {
    name: '',
    location: ''
  }

  handleOnNameChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleOnLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    // add missing code
    let restaurant = this.state.name
    this.props.addRestaurant(this.state)
  }

  render() {
    console.log(this.state)
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnNameChange(event)}
            id="name"
            placeholder="restaurant name" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnLocationChange(event)}
            id="location"
            placeholder="location" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};

const msp = state => {
 return { restaurants: state.restaurants}
}

const mdp = dispatch => {
  return{
    addRestaurant: (restaurant) => {
      dispatch(addRestaurant(restaurant))
    }
  }
}
//connect this component by wrapping RestaurantInput below
export default connect(msp, mdp)(RestaurantInput)
