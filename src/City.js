import React from "react"

const City = ({name, country_name, country_flag_url}) => {
    return(
        <div className="city">
            <img src={country_flag_url} alt="" />
            <h1>{name}, {country_name}</h1>
        </div>
    )
}

export default City;