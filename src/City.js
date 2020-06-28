import React from "react"

const City = ({name, country_name, country_flag_url}) => {
    return(
        <div>
            <img src={country_flag_url} alt=""/>
            <p>{name}, {country_name}</p>
        </div>
    )
}

export default City;