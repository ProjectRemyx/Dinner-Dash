import React from 'react'
import Restaurants from '../restaurants/Restaurants';
import Search from '../restaurants/Search';

const Index = () => {
    return (
        <React.Fragment>
            <Search/>
            <Restaurants/>
        </React.Fragment>
    );
};

export default Index;