import React from 'react'

const Restaurant = (props) => {
    const { restaurant } = props;

    return (
        <div className="col-md-3">
            <div className="card mb-4 shadow-sm">
                <div className="card-header text-center">Price Rating - {restaurant.price}</div>
                <img className="card-img-top" src={restaurant.image_url} alt="Restaurant"/>
                <div className="card-body">
                    <h5 className="card-title">{restaurant.name}</h5>
                    <p className="card-text"><i className="fas fa-map-marker-alt mr-3"/>{restaurant.address}<br></br><i className="fas fa-phone mr-3"/>{restaurant.phone}</p>
                    <a href={restaurant.reserve_url} className="btn btn-primary btn-block">Reserve Table!</a>
                </div>
            </div>
        </div>
    )
}

export default Restaurant;