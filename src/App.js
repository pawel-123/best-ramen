import React, { useEffect, useState } from 'react';
import './App.css';
import Restaurant from './Restaurant'
import City from './City'

function App() {

    const [restaurants, setRestaurants] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");
    const [cities, setCities] = useState([]);

    useEffect(() => {
        getRestaurants();
    }, [query]);

    useEffect(() => {
        console.log(`Query is currently: ${query}`)
        if (query.length > 0)
            getCities();
    }, [query]);

    const getRestaurants = async () => {
        const response = await fetch("https://developers.zomato.com/api/v2.1/search?count=10&cuisines=320&sort=rating&order=desc", {
            headers: {
              Accept: "application/json",
              "User-Key": "d1b1d251eb3a0f96b582683ef476f0b0"
            }
          });
        const data = await response.json();
        setRestaurants(data.restaurants);
    }

    const getCities = async () => {
        const response = await fetch(`https://developers.zomato.com/api/v2.1/cities?q=${query}`, {
            headers: {
              Accept: "application/json",
              "User-Key": "d1b1d251eb3a0f96b582683ef476f0b0"
            }
          });
        const data = await response.json();
        setCities(data.location_suggestions);
    }

    const updateSearch = e => {
        setSearch(e.target.value)
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
    }

    return(
        <div>
            <h1>Welcome to Best Ramen!</h1>
            <form onSubmit={getSearch}>
                <input type="text" value={search} onChange={updateSearch}/>
                <button type="submit">Search</button>
            </form>
            {query.length === 0 ?
                <p>Type in the name of the city</p> :
                cities.map(city => (
                    <City
                        key={city.id}
                        name={city.name}
                        country_name={city.country_name}
                        country_flag_url={city.country_flag_url}
                    />
                ))
            }
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
