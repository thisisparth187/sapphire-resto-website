import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import FindRoom from './pages/FindRoom'
import RoomsSuits from './pages/RoomsSuits'
import RoomDetails from './pages/RoomDetails'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/findroom" element={<FindRoom />} />
          <Route path="/roomssuits" element={<RoomsSuits />} />
          <Route path="/roomdetails" element={<RoomDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      </div>
    </Router>
  )
}

export default App
