import React, { Component } from 'react';

export default class HeaderIntro extends Component{
    
    render(){
        return(
            <div className="header-background">
                <span role="img" aria-label="Dinner Dash Banner Image" className="hidden"></span>
                <div className="header-container">
                    <div className="header-body-container">
                        <h1 className="header-heading">Dinner Dash</h1>
                        <h2 className="header-subheading">Looking for a place to eat?</h2>
                    </div>
                </div>
            </div>
        );
    }
}


