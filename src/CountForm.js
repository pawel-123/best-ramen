import React from "react"
import { InputNumber } from 'antd';

const CountForm = ({ updateCount }) => {
    return (
        <div>
            <h2>Select the number of restaurants to display (1-10)</h2>
            <InputNumber min={1} max={10} defaultValue={5} onChange={updateCount} />
        </div>
    )
}

export default CountForm;