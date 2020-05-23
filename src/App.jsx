import React from "react"
import Navbar from "./components/Navbar"
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </>
  )
}

export default App
