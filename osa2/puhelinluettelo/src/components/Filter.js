import React from 'react'

const Filter = ({ newFilter, hanldeFilterChange}) => {

    return (
    <form >
        filter shown with <input value={newFilter}
        onChange={hanldeFilterChange}/>
    </form>
    )

}

export default Filter
