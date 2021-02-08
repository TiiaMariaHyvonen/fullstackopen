import axios from 'axios'
import React, {useState, useEffect } from 'react'
import Find from './components/Find.js'
import Show from './components/Show.js'

const App = () => {

  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
        console.log(response.data)
      })
  }
  
  useEffect(hook, [])

const handleFilterChange = (event) => {
  setNewFilter(event.target.value)
}

return (
  <div>
    <Find newFilter={newFilter} handleFilterChange={handleFilterChange}/>
    <Show countries={countries} newFilter={newFilter}/>
  </div>
)
}

export default App





