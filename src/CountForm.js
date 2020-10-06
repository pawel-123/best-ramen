import React from "react"

const CountForm = ({ updateCount }) => {
    return (
        <input type="number" onChange={updateCount}></input>
    )
}

export default CountForm;