import React from 'react'
import Content from './Content.js'
import Total from './Total.js'
import Header from './Header.js'

const Course = ({course}) => {
    return(
    <div>
        <Header course={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
    </div>
    )
}

export default Course

