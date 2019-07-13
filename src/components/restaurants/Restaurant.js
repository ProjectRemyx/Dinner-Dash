import React from 'react'

const Restaurant = (props) => {
    const { restaurant } = props;
    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>{restaurant.name}</h5>
                </div>
            </div>
        </div>
    )
}

export default Restaurant;