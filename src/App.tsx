import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import ReactContext from './react-context/ReactContext'

function Home() {
  return (
    <div>
      <h1>Select a state type</h1>
      <ul>
        <li>
          <Link to="/react-context">React Context</Link>
        </li>
      </ul>
    </div>
  )
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="react-context" element={<ReactContext />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
