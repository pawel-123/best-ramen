import React from "react"

const Restaurant = ({name, city, rating, photo}) => {
    return(
        <div className="restaurant">
            <img src={photo} alt="" />
            <h1>{name}</h1>
            <h3>{city}</h3>
            <h3>{rating}</h3>
        </div>
    )
}

export default Restaurant;