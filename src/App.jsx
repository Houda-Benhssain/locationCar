import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import Cars from './component/Cars';
import About from './component/About';
import Contact from './component/Contact';
import LoginPage from './component/login';
import RegisterPage from './component/Register';


function App() {
  return (
  <div>
  
   <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cars' element={<Cars/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/register' element={<RegisterPage/>}></Route>
    </Routes>

  
  </div>
  )
}

export default App