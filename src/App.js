import React, { useEffect, useState } from 'react';
import Header from './Header';
import Restaurant from './Restaurant';
import './index.css';
import { fetchData } from './api/api'

function App() {

    const [restaurants, setRestaurants] = useState([]);
    const [count, setCount] = useState(10);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const getRestaurants = async () => {
            try {
                const data = await fetchData(count);
                setRestaurants(data.restaurants);
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        }

        getRestaurants();
    }, [count]);

    const onChange = (event) => {
        const restaurantCount = event.currentTarget.value;
        setCount(Number(restaurantCount));
    }

    return (
        <div>
            <Header />
            <input type="number" onChange={onChange}></input>

            {isLoading ? (
                <p>Loading...</p>
            ) : (
                    restaurants.map(restaurant => (
                        <Restaurant
                            key={restaurant.restaurant.id}
                            name={restaurant.restaurant.name}
                            city={restaurant.restaurant.location.city}
                            rating={restaurant.restaurant.user_rating.aggregate_rating}
                            photo={restaurant.restaurant.featured_image ? restaurant.restaurant.featured_image : "https://static.thenounproject.com/png/18272-200.png"}
                        />
                    ))
                )}

            {isError && <p>Error in fetching restaurants</p>}

        </div>
    )
}

export default App;
