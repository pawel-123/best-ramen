# Best Ramen

Best Ramen is an app that shows the highest rated ramen places in the world based on [Zomato API](https://developers.zomato.com/api) (API Key is not hidden in .env as it's a free and instant API key that anyone can generate via this URL and allows 1000 calls/day).

The app allows changing the number of results displayed on the page via input field and you can visit the detail page of each restaurant.

## Technology

Best Ramen was my second React app, and it was initally set up initially using the [Create React App](https://github.com/facebook/create-react-app) boilerplate.

## How to set up

1. Install dependencies

`npm install`

2. Start the application

`npm start`

## Learnings
- Convert cURL from Zomato API to fetch
- Use isLoading and isError states to display loading and error messages while fetching
- Use Ant Design component to display loading state
- Map restaurants data fetched from a Zomato API (using API Key) to a RestaurantList
- Set a default restaurant image if it doesn't have a featured image
- Change the number of Restaurants displayed in RestaurantList with an input field and refresh automatically
- Use React Router to dynamically generate RestaurantDetail URLs and pages from RestaurantList
- Use nested destructuring for cleaner return statements in RestaurantDetail component

## To Do's
- [ ] Work on CSS