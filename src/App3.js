
import React from 'react'
import Login from './Pages/Login'

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import { Provider } from 'react-redux/es/exports';
import Firmdetail from './Pages/Firmdetail';
import NewLogin from './NewLogin'

function App3() {
  return (
    <div>
      <BrowserRouter>
      {/* <Login /> */}
      </BrowserRouter>
      <Home />
      {/* <NewLogin /> */}
 
      <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<App3 />} />s */}
      <Route path="Firmdetail" element={<Firmdetail />} />
      <Route path="/NewLogin" element={<NewLogin />} />
    
    </Routes>
  </BrowserRouter>
    </div>
  )
}
export default App3







