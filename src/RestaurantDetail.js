import React, { useEffect, useState } from 'react';
import { fetchRestaurant } from './api/api'

const RestaurantDetail = ({ match }) => {

    const [restaurant, setRestaurant] = useState();

    useEffect(() => {
        const getRestaurantDetail = async () => {
            const data = await fetchRestaurant(match);
            setRestaurant(data);
        }

        getRestaurantDetail();
    }, [match]);

    if (!restaurant) {
        return <div>loading</div>
    }

    const {
        featured_image,
        name,
        id,
        location: {
            city,
        },
        user_rating: {
            aggregate_rating,
        },
    } = restaurant;

    return (
        <div>
            <img className="restphoto-detail" src={featured_image
                ? featured_image
                : "https://static.thenounproject.com/png/18272-200.png"}
                alt={`${name}`}
            />
            <h1>Name: {name}</h1>
            <p>ID: {id}</p>
            <p>City: {city}</p>
            <p>Rating: {aggregate_rating}</p>
        </div>
    )
}

export default RestaurantDetail;