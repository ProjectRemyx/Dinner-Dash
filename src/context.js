import React, { useState, useEffect } from 'react'
import axios from 'axios';

export const Context = React.createContext();

// const reducer = (state, action) => {
//     switch(action.type){
//         case 'SEARCH_RESTAURANTS':
//         return{
//             ...state,
//             restaurant_list: action.payload,
//             heading: 'Search Results'
//         };
//         default:
//             return state;
//     }
// };

export function ContextController({ children }) {
    let initialState = {
        restaurant_list: [],
        heading: '',
        // dispatch: action => this.setState(state => reducer(state, action))
    };

    const [state, setState] = useState(initialState);

    useEffect(() => {
        axios
        .get(
            `http://opentable.herokuapp.com/api/restaurants?city=toronto`)
            .then(res => {
                setState({
                    restaurant_list: res.data.restaurants, 
                    heading: "Featured Toronto Restaurants" 
                });
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    );
}


