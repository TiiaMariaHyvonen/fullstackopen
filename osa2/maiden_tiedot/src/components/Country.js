import React from 'react'


const Country = ({country}) => {
    
    return (
        <div>
        <h1>{country.name}</h1>
        <div>capital: {country.capital}</div>
        <div>population: {country.population}</div>
        <h2>languages</h2>
        {country.languages.map(language => <div key={language.name}> {language.name} </div>)}
        <p></p>
        <img src={country.flag} width='200'/>
        </div>

    )
}


export default Country 