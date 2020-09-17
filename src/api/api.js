import { zomatoApiBase } from '../constants/constants'

export const fetchData = async (count) => {
    const response = await fetch(`${zomatoApiBase}search?entity_type=city&count=${count}&cuisines=320&sort=rating&order=desc`, {
        headers: {
            Accept: "application/json",
            "User-Key": "d1b1d251eb3a0f96b582683ef476f0b0"
        }
    });
    const data = await response.json();
    return data;
}