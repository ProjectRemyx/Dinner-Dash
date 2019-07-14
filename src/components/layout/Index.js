import React from 'react'
import Restaurants from '../restaurants/Restaurants';
import Search from '../restaurants/Search';
import Bounce from 'react-reveal/Bounce';

const Index = () => {
    return (
        <React.Fragment>
            <Bounce left>
                <Search/>
            </Bounce>
            <Restaurants/>
        </React.Fragment>
    );
};

export default Index;