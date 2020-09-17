import React, {useEffect, useState} from 'react';
import {zomatoBaseUrl} from './constants/constants';
import {apiRequest} from './api/api';
import Header from './Header';
import Restaurant from './Restaurant';
import './index.css';

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [count, setCount] = useState(2);

  useEffect(() => {
    getRestaurants(count);
  }, [count]);

  const getRestaurants = async count => {
    const data = await apiRequest({count});
    setRestaurants(data);
  };

  const onChange = e => {
    const newCount = Number(e.currentTarget.value || 10);
    setCount(newCount);
  };

  return (
    <div>
      <Header />
      <input type="number" onChange={onChange} />
      {restaurants &&
        restaurants.map(restaurant => (
          <Restaurant
            key={restaurant.restaurant.id}
            name={restaurant.restaurant.name}
            city={restaurant.restaurant.location.city}
            rating={restaurant.restaurant.user_rating.aggregate_rating}
            photo={
              restaurant.restaurant.featured_image
                ? restaurant.restaurant.featured_image
                : 'https://static.thenounproject.com/png/18272-200.png'
            }
          />
        ))}
    </div>
  );
}

export default App;
