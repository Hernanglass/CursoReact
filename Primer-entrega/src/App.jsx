import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
const greeting="Bienvenidos a Juli Porcelana"
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={greeting} />
    </>
  )
}

export default App
