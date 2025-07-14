import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contect from './pages/Contect'

function App() {
  return (
    <>
      <div className=' w-full h-fit bg-neutral-900'>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contect' element={<Contect />} />

        </Routes>
        


      </div>
    </>
  )
}

export default App