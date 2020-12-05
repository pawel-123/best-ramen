import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import RestaurantList from './RestaurantList';
import RestaurantDetail from './RestaurantDetail';
import CountForm from './CountForm';
import './index.css';

function App() {

    const [count, setCount] = useState(5);

    return (
        <BrowserRouter>
            <Header />

            <Route path="/" exact render={(props) => (
                <CountForm {...props} updateCount={setCount} />
            )} />

            <Route path="/" exact render={(props) => (
                <RestaurantList {...props} count={count} />
            )} />

            <Route path="/:id" exact component={RestaurantDetail} />

        </BrowserRouter>
    )
}

export default App;
