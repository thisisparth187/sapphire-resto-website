import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

import FindRoom from './pages/FindRoom'
import RoomsSuits from './pages/RoomsSuits'
import RoomDetails from './pages/RoomDetails'

import Starters from './pages/Starters'
import Lunch from './pages/Lunch'
import Dinner from './pages/Dinner'

const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/findroom" element={<FindRoom />} />
            <Route path="/roomssuits" element={<RoomsSuits />} />
            <Route path="/roomdetails" element={<RoomDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/starters" element={<Starters />} />
            <Route path="/lunch" element={<Lunch />} />
            <Route path="/dinner" element={<Dinner />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
