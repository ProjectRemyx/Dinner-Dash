import React, { Component } from 'react'
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type){
        case 'SEARCH_RESTAURANTS':
        return{
            ...state,
            restaurant_list: action.payload,
            heading: 'Search Results'
        };
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        restaurant_list: [],
        heading: 'Featured Toronto Restaurants',
        dispatch: action => this.setState(state => reducer(state, action))
    };

    componentDidMount(){
        axios.get(`http://opentable.herokuapp.com/api/restaurants?city=toronto`)
            .then(res => {
                // console.log(res.data);
                this.setState({restaurant_list: res.data.restaurants});
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;

