import React from 'react'

const Show = ({people}) => {

    return (
    <ul>
        {people.map(person => <div key={person.id}> {person.name} {person.number}</div>)}
    </ul>
    )

}

export default Show