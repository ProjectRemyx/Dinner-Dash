import React, { Component } from 'react'
import axios from 'axios';

const Context = React.createContext();

export class Provider extends Component {
    state = {
        restaurant_list: [],
        heading: 'Featured Toronto Restaurants'
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

