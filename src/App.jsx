import './App.css'
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import React from 'react';


//import pages
import Home from './pages/Home'
import NavBar from './components/NavBar';
import About from './pages/About';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Contato from './pages/Contato';

//import components
import Medias from './components/Medias';


function App() {
return (
    <>
    
     <div>
      <BrowserRouter>
       
      <NavBar />
      <Medias />
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/skills' element={<Skills />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/contato' element={<Contato/>} />
          </Routes>
    
     </BrowserRouter>
     </div>
    </>
  )
}

export default App
