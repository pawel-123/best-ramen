import React, { useEffect, useState } from 'react';
import Header from './Header';
import Restaurant from './Restaurant';
import './index.css';

function App() {

    const [restaurants, setRestaurants] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");

    useEffect(() => {
        getRestaurants();
    }, [query]);

    const getRestaurants = async () => {
        const response = await fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=${query}&entity_type=city&count=10&cuisines=320&sort=rating&order=desc`, {
            headers: {
                Accept: "application/json",
                "User-Key": "d1b1d251eb3a0f96b582683ef476f0b0"
            }
        });
        const data = await response.json();
        setRestaurants(data.restaurants);
    }

    return (
        <div>
            <Header />
            {restaurants.map(restaurant => (
                <Restaurant
                    key={restaurant.restaurant.id}
                    name={restaurant.restaurant.name}
                    city={restaurant.restaurant.location.city}
                    rating={restaurant.restaurant.user_rating.aggregate_rating}
                    photo={restaurant.restaurant.featured_image ? restaurant.restaurant.featured_image : "https://static.thenounproject.com/png/18272-200.png"}
                />
            ))}
        </div>
    )
}

export default App;
