import React from 'react'

const Total = ({parts}) => {

    const reducer = (accumulator, currentValue) => accumulator + currentValue
    const points = parts.map(part => part.exercises)


    return(
      <div>
        <p>
        Number of exercises {points.reduce(reducer)}
        </p>
      </div>
    )
  }

  export default Total
  //{props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}