import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context';

class Search extends Component {
    state = {
        restaurantLocation: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    findRestaurants = (dispatch, e) => {
        e.preventDefault();

        axios.get(`http://opentable.herokuapp.com/api/restaurants?city=${this.state.restaurantLocation}`)
            .then(res => {
                dispatch({
                    type: 'SEARCH_RESTAURANTS',
                    payload: res.data.restaurants
                });

                this.setState({ restaurantLocation: '' });
            })
            .catch(err => console.log(err));
    }
    
    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-4 p-4">
                            <h2 className="display-4 text-center">Restaurant Search</h2>
                            <p className="lead text-center">Search for restaurants by city</p>
                            <form onSubmit={this.findRestaurants.bind(this, dispatch)}>
                                <div className="form-group">
                                    <input type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="City name..."
                                    name="restaurantLocation"
                                    value={this.state.restaurantLocation}
                                    onChange={this.onChange}
                                    />
                                </div>
                                <button 
                                className="btn btn-primary btn-lg mb-3 btn-block" 
                                type="submit"
                                >
                                    Get Restaurants
                                </button>
                            </form>
                        </div>
                    );
                }}
            </Consumer>
        )
    }
}

export default Search;