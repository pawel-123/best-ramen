import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { fetchData } from './api/api';
import { Spin } from 'antd';

const RestaurantList = ({ count }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        setIsLoading(true);

        const getRestaurants = async () => {
            try {
                const data = await fetchData(count);
                setRestaurants(data.restaurants);
            } catch (error) {
                setErrorMessage(error.toString())
                setIsError(true);
            }
            setIsLoading(false);
        }

        getRestaurants();
    }, [count]);

    return (
        <div>
            {isLoading
                ? <Spin />
                : (isError
                    ? <p>Error: {errorMessage}</p>
                    : restaurants.map(restaurant => (
                        <div key={restaurant.restaurant.id} className="restaurant">
                            <img src={restaurant.restaurant.featured_image ? restaurant.restaurant.featured_image : "https://static.thenounproject.com/png/18272-200.png"} alt="" className="restphoto" />
                            <h2 className="restname">
                                <Link to={`/${restaurant.restaurant.id}`}>{restaurant.restaurant.name}</Link>
                            </h2>
                            <h3 className="restcity">{restaurant.restaurant.location.city}</h3>
                            <h3 className="restrating">{restaurant.restaurant.user_rating.aggregate_rating}</h3>
                        </div>

                    ))
                )}
        </div>
    )
}

export default RestaurantList;