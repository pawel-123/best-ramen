import React from "react"

const Restaurant = ({name, city, rating, photo}) => {
    return(
        <div className="restaurant">
            <img src={photo} alt="" className="restphoto"/>
            <h2 className="restname">{name}</h2>
            <h3 className="restcity">{city}</h3>
            <h3 className="restrating">{rating}</h3>
        </div>
    )
}

export default Restaurant;