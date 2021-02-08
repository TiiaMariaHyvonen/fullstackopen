import React from 'react'
import Country from './Country'

const Show = ({countries, newFilter}) => {
    const filtered = countries.filter(country => country.name.toLocaleLowerCase().includes(newFilter.toLocaleLowerCase()))
    const filteredLen = filtered.length

    if (filteredLen === 1) {
        return <Country country={filtered[0]}/>
    } else if (filteredLen > 10) {
        return (
        <div>Too many matches, specify another filter</div>)
    }

    return (
        filtered.map(country => <div key={country.name}> {country.name}</div>)

    )
}




export default Show