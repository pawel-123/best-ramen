import React from "react";
import { Link } from 'react-router-dom';

const Restaurant = ({ id, name, city, rating, photo }) => {
    return (
        <div className="restaurant">
            <img src={photo} alt="" className="restphoto" />
            <h2 className="restname">
                <Link to={`/${id}`}>{name}</Link>
            </h2>
            <h3 className="restcity">{city}</h3>
            <h3 className="restrating">{rating}</h3>
        </div>
    )
}

export default Restaurant;