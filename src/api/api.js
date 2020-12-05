import { zomatoApiBase } from '../constants/constants'

export const fetchData = async (count) => {
    const response = await fetch(`${zomatoApiBase}search?entity_type=city&count=${count}&cuisines=320&sort=rating&order=desc`, {
        headers: {
            Accept: "application/json",
            "User-Key": "12bc09e5b12689345f110bb8f2d76b3c"
        }
    });
    const data = await response.json();
    return data;
}


export const fetchRestaurant = async (match) => {

    const response = await fetch(`${zomatoApiBase}restaurant?res_id=${match.params.id}`, {
        headers: {
            Accept: "application/json",
            "User-Key": "12bc09e5b12689345f110bb8f2d76b3c"
        }
    });
    const data = await response.json();
    return data;
}