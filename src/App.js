import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Restaurant from './Restaurant';
import RestaurantDetail from './RestaurantDetail';
import './index.css';
import { fetchData } from './api/api'

function App() {

    const [restaurants, setRestaurants] = useState([]);
    const [count, setCount] = useState(3);
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

    const onChange = (event) => {
        const restaurantCount = event.currentTarget.value;
        setCount(Number(restaurantCount));
    }

    return (
        <BrowserRouter>
            <div>
                <Header />
                <input type="number" onChange={onChange}></input>

                <Route path="/:id" exact component={RestaurantDetail} />

                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                        restaurants && restaurants.map(restaurant => (
                            <Restaurant
                                key={restaurant.restaurant.id}
                                id={restaurant.restaurant.id}
                                name={restaurant.restaurant.name}
                                city={restaurant.restaurant.location.city}
                                rating={restaurant.restaurant.user_rating.aggregate_rating}
                                photo={restaurant.restaurant.featured_image ? restaurant.restaurant.featured_image : "https://static.thenounproject.com/png/18272-200.png"}
                            />
                        ))
                    )}

                {isError && <p>Error: {errorMessage}</p>}
            </div>
        </BrowserRouter>
    )
}

export default App;
