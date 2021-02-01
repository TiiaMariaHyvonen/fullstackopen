import React, { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
      ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
      setNewNumber(event.target.value)
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
          number: newNumber
      }
      setPersons(persons.concat(nameObject))
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} 
          onChange={handleNameChange}/>
        </div>
        <div>
            number: <input value={newNumber}
            onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
          {persons.map(person => <div key={person.name}> {person.name} {person.number}</div>)}
      </ul>
    </div>
  )

}

export default App