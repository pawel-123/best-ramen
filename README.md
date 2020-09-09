# Best Ramen

Best Ramen is an app that by default displays the highest rated ramen places in the world based on [Zomato API](https://developers.zomato.com/api) (API Key is not hidden in .env as it's a free and instant API key that anyone can generate via this URL and allows 1000 calls/day).

The allows searching for the cities based on the Zomato API (done) - once a city is selected from the list (in progress), the list of ramen places should update according to the selected location (in progress).

## Technology

Best Ramen was my second React app, and it was initally set up initially using the [Create React App](https://github.com/facebook/create-react-app) boilerplate.

## Learnings
- Convert cURL from Zomato API to fetch
- Display data fetched from a Zomato API in the app using Hooks
- Search for cities based on Zomato API and display the results automatically

## To Do's
- [ ] Select a city from the result and update ramen place list based on the selected city