import React, { useContext } from 'react';
import { Context } from '../../context';
import Loading from '../layout/Loading';
import Restaurant from '../restaurants/Restaurant';

const Restaurants = () => {
    const [state] = useContext(Context);
    const { restaurant_list, heading } = state;

    if(restaurant_list === undefined || restaurant_list.legnth === 0){
        return <Loading/>;
    }
    else{
        return(
            <React.Fragment>
                <h4 className="text-center results">{ heading }</h4>
                <div className="row">
                    { restaurant_list.map(item => (
                        <Restaurant key={item.id} restaurant={item}/>
                    ))}
                </div>
            </React.Fragment>
        );
    }
};

export default Restaurants;