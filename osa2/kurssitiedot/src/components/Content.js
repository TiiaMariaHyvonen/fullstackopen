import React from 'react'
import Part from './Part.js'

const Content = ({parts}) => {
    return(
      <div>
         <ul>
             {parts.map(part => <li key={part.id}> <Part content={part.name} exercises={part.exercises}/></li>)}
         </ul>
      </div>
    )
  }

  export default Content

