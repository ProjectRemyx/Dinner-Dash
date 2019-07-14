import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Context} from '../../context';

const Search = () => {
    const[state, setState] = useContext(Context);
    const [userInput, setUserInput] = useState("");
    const [restaurantLocation, setRestaurantLocation] = useState("");

    useEffect(() => {
        axios
        .get(`https://opentable.herokuapp.com/api/restaurants?city=${restaurantLocation}`)
            .then(res => {
                let restaurant_list = res.data.restaurants;
                setState({ restaurant_list: restaurant_list, heading: "Search Results" });
            })    
            .catch(err => console.log(err));
    }, [restaurantLocation]);

    const findRestaurants = e => {
        e.preventDefault();
        setRestaurantLocation(userInput);
    };

    const onChange = e => {
        setUserInput(e.target.value);
    };

        return (
            <div className="card card-body mb-4 p-4">
                <h3 className="display-4 text-center">Restaurant Search</h3>
                <p className="lead text-center">Search for restaurants by city</p>
                <form onSubmit={findRestaurants}>
                    <div className="form-group">
                        <label htmlFor="search-box">City name:</label>
                        <input type="text" 
                        className="form-control form-control-lg" 
                        id="search-box"
                        placeholder="Toronto"
                        name="userInput"
                        value={userInput}
                        onChange={onChange}
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
};

export default Search;