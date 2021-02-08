import React from 'react'



const Find = ({newFilter, handleFilterChange}) => {
    return (
        <form>
      find countries <input value={newFilter}
      onChange={handleFilterChange}/>
    </form>
    )
}

export default Find