import React, { useEffect, useState } from 'react';
import { fetchRestaurant } from './api/api'

const RestaurantDetail = ({ match }) => {

    const [restaurant, setRestaurant] = useState({
        location: {},
        user_rating: {}
    });

    useEffect(() => {
        const getRestaurantDetail = async () => {
            const data = await fetchRestaurant(match);
            setRestaurant(data);
        }

        getRestaurantDetail();
    }, [match]);

    return (
        <div>
            <img src={restaurant.featured_image ? restaurant.featured_image : "https://static.thenounproject.com/png/18272-200.png"} alt={`${restaurant.name}`} />
            <h1>Name: {restaurant.name}</h1>
            <p>ID: {restaurant.id}</p>
            <p>City: {restaurant.location.city}</p>
            <p>Rating: {restaurant.user_rating.aggregate_rating}</p>
        </div>
    )
}

export default RestaurantDetail;