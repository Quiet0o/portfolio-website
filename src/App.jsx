import { useState } from 'react'
import './App.css'
import HeroPage from './HeroPage/HeroPage'
import Menu from './Menu/Menu'

function App() {

  return (
    <div className="App">
        <Menu/>
        <HeroPage/>
    </div>
  )
}

export default App
