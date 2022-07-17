import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import ReactContext from './react-context/ReactContext'
import ReactRecoil from './react-recoil/ReactRecoil'
import ReactRedux from './react-redux/ReactRedux'
import ReactZustand from './react-zustand/ReactZustand'

function Home() {
  return (
    <div>
      <h1>Select a state type</h1>
      <ul>
        <li>
          <Link to="/react-context">React Context</Link>
        </li>
        <li>
          <Link to="/react-redux">React Redux</Link>
        </li>
        <li>
          <Link to="/react-recoil">React Recoil</Link>
        </li>
        <li>
          <Link to="/react-zustand">React Zustand</Link>
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
          <Route path="react-redux" element={<ReactRedux />} />
          <Route path="react-recoil" element={<ReactRecoil />} />
          <Route path="react-zustand" element={<ReactZustand />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
