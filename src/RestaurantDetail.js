import React, { useEffect, useState } from 'react';
// import { fetchRestaurant } from './api/api'
import { zomatoApiBase } from './constants/constants'

const RestaurantDetail = ({ match }) => {

    const [restaurant, setRestaurant] = useState({});

    useEffect(() => {
        fetchRestaurant();
        // added eslint-disable-next-line based on warning when compiling:
        // "React Hook useEffect has a missing dependency: 'fetchRestaurant'. Either include it or remove the dependency array"
        // is there a better way to solve this?
        // eslint-disable-next-line
    }, [restaurant]);

    const fetchRestaurant = async () => {
        const response = await fetch(`${zomatoApiBase}restaurant?res_id=${match.params.id}`, {
            headers: {
                Accept: "application/json",
                "User-Key": "12bc09e5b12689345f110bb8f2d76b3c"
            }
        });
        const data = await response.json();
        setRestaurant(data);
    }

    return (
        <div>
            <h1>{restaurant.name}</h1>
            <p>{restaurant.id}</p>
        </div>
    )
}

export default RestaurantDetail;