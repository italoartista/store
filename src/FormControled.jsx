import { useState } from 'react'

import './App.css'


// componentes controlados 


function Form( props ) { 
  const [name, setName] = useState('')
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    console.log(props)
    setName(e.target.value)
    props.onNameChange(e.target.value)
  }

  const handleRadio = (e) => {
    setValue(e.target.value)
  }


  return (
    <form>
      <input type="text" value={name} onChange={handleChange} />
      <input type='radio' name='selected' value={value} onChange={handleRadio} />
    </form>
  )

}

function App() {
  const [name, setName] = useState('')
 
  function handleNameChange(newName) {
    setName(newName)
  }
 
  return (
    <>
      <Form onNameChange={handleNameChange} name='Nome'  idade='31' user={{userName: 'italo', password: 'supersenha'  }} />
      <h1>{name}</h1>
    </>
  )
}

export default App
