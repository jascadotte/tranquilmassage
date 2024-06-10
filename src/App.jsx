import { useState } from 'react'
import { Button } from 'react-bootstrap';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Packages from './components/packages/Packages';
import Specialists from './components/specialists/Specialists';
import Contact from './components/contact/Contact';
import Booking from './components/booking/Booking';
import Confirmation from './components/confirmation/Confirmation';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'



function App() {
  return (
    <>
    <Header />
    <Container style={{marginTop:"75px", marginBottom:'30px'}}>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/specialists" element={<Specialists />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/confirmation" element={<Confirmation />}/>
      </Routes>
    </HashRouter>
    </Container>
    <Footer />
    </>
  );
}



export default App
