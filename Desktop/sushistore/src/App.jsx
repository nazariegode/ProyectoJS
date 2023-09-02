import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const App = () => {

  const greetings = 'Bienvenidos al mejor sushi!'

  return (
    <>
      <NavBar/>

      <ItemListContainer greetings={greetings}/>
    </>
  )
}

export default App 