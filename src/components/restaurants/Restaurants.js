import React, { Component } from 'react';
import { Consumer } from '../../context';
import Loading from '../layout/Loading';
import Restaurant from '../restaurants/Restaurant';

class Restaurants extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { restaurant_list, heading } = value;
                    if(restaurant_list === undefined || restaurant_list.length === 0){
                        return <Loading/>;
                    }
                    else{
                        return (
                            <React.Fragment>
                            <h2 className="text-center results">{ heading }</h2>
                            <div className="row">
                                { restaurant_list.map(item => (
                                    <Restaurant key={item.id} restaurant={item}/>
                                ))}
                            </div>
                            </React.Fragment>
                        );
                    }
                }}
            </Consumer>
        );
    }
}

export default Restaurants;