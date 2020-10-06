import React, { useEffect, useState } from 'react';
import { fetchRestaurant } from './api/api'

const RestaurantDetail = ({ match }) => {

    const [restaurant, setRestaurant] = useState({});

    useEffect(() => {
        const getRestaurantDetail = async () => {
            const data = await fetchRestaurant();
            setRestaurant(data);
        }

        getRestaurantDetail();
        // added eslint-disable-next-line based on warning when compiling:
        // "React Hook useEffect has a missing dependency: 'fetchRestaurant'. Either include it or remove the dependency array"
        // is there a better way to solve this?
        // eslint-disable-next-line
    }, [restaurant]);

    return (
        <div>
            <h1>{restaurant.name}</h1>
            <p>{restaurant.id}</p>
        </div>
    )
}

export default RestaurantDetail;