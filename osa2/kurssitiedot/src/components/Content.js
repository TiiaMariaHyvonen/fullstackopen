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

  /*
  <Part content={props.parts[0].name} exercises={props.parts[0].exercises}/>
        <Part content={props.parts[1].name} exercises={props.parts[1].exercises}/>
        <Part content={props.parts[2].name} exercises={props.parts[2].exercises}/>
  */