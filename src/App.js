import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import RestaurantList from './RestaurantList';
import RestaurantDetail from './RestaurantDetail';
import CountForm from './CountForm';
import './index.css';

function App() {

    const [count, setCount] = useState(5);

    // simplified updateCount function due to use of Ant Design InputNumber component in CountForm
    const updateCount = (value) => {
        setCount(value);
    }

    return (
        <BrowserRouter>
            <div>
                <Header />

                <Route path="/" exact render={(props) => (
                    <CountForm {...props} updateCount={updateCount} />
                )} />

                <Route path="/" exact render={(props) => (
                    <RestaurantList {...props} count={count} />
                )} />

                <Route path="/:id" exact component={RestaurantDetail} />

            </div>
        </BrowserRouter>
    )
}

export default App;
