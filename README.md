# Best Ramen

Best Ramen is an app that by default displays the highest rated ramen places in the world based on [Zomato API](https://developers.zomato.com/api) (API Key is not hidden in .env as it's a free and instant API key that anyone can generate via this URL and allows 1000 calls/day).

The app also allows searching for the cities based on the Zomato API. The intention was to allow the member to select a city and update the list of ramen places based on the selected city but it turned out that it's not possible to search restaurants by city via Zomato API, so the feature is currently commented out.

## Technology

Best Ramen was my second React app, and it was initally set up initially using the [Create React App](https://github.com/facebook/create-react-app) boilerplate.

## Learnings
- Convert cURL from Zomato API to fetch
- Map restaurants data fetched from a Zomato API (using API Key) to a Restaurant components
- Set a default restaurant image if it doesn't have a featured image
- Search for cities based on Zomato API and display the results automatically (currently commented out)

## To Do's
- [ ] Find a workaround to search restaurants based on the selected city