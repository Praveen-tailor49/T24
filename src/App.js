import React, { useState } from 'react';
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
    <Routes>
      <Route path = '/' element={<Home/>} />
      <Route path = '/admin-page' element={<AdminPage  />} />

    </Routes>
    
      
    </>
  );
}

export default App;
