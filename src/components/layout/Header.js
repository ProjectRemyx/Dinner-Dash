import React, { Component } from 'react';

export default class HeaderIntro extends Component{
    
    render(){
        return(
            <div className="header-background">
                <div className="header-container">
                    <div className="header-body-container">
                        <h1 className="header-heading">Dinner Dash</h1>
                        <h3 className="header-text">Restaurant Finder</h3>
                    </div>
                </div>
            </div>
        );
    }
}


