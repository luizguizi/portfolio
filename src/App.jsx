import './App.css'
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import React from 'react';


//import pages
import Home from './pages/Home'
import NavBar from './components/NavBar';

//import components
import Medias from './components/Medias';

function App() {
return (
    <>
     <div>
      <BrowserRouter>
      <NavBar />
          <Routes>
              <Route path='/' element={<Home/>} />
          </Routes>
    
     </BrowserRouter>
     </div>
    </>
  )
}

export default App
