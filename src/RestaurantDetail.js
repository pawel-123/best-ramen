import React, { useEffect, useState } from 'react';
import { fetchRestaurant } from './api/api'

const RestaurantDetail = ({ match }) => {

    const [restaurant, setRestaurant] = useState({});

    useEffect(() => {
        const getRestaurantDetail = async () => {
            const data = await fetchRestaurant(match);
            setRestaurant(data);
        }

        getRestaurantDetail();
    }, [match]);

    return (
        <div>
            <h1>{restaurant.name}</h1>
            <p>{restaurant.id}</p>
        </div>
    )
}

export default RestaurantDetail;