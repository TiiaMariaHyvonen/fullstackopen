import React, { useState, useEffect } from 'react'
import Show from './components/Show.js'
import Add from './components/Add.js'
import Filter from './components/Filter.js'
import axios from 'axios'

const App = ({people}) => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/posts')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
      setNewNumber(event.target.value)
  }

  const hanldeFilterChange = (event) => {
      setNewFilter(event.target.value)
  }

  const addName = (event) => {
      event.preventDefault()
      setNewName('')
      setNewNumber('')

      if (persons.map(person => person.name).includes(newName)) {
        window.alert(`${newName} is already added to phonebook`)
      }
      else{
      const nameObject = {
          name: newName,
          number: newNumber,
          id: persons.length + 1
      }
      setPersons(persons.concat(nameObject))
    }
  }


  return (
    <div>
      <h1>Phonebook</h1>
      <Filter newFilter={newFilter} hanldeFilterChange={hanldeFilterChange}/>
      <h2> add a new </h2>
      <Add addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
     <Show people={persons.filter(person => person.name.toLocaleLowerCase().includes(newFilter.toLocaleLowerCase()))}/>
        </div>
  )

}

export default App
