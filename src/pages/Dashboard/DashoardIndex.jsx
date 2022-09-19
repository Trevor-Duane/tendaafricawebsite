import React from 'react';
import './indexStyles.css';
import Login from './components/account/Login';
import Register from './components/account/Register';
import { Dashboard } from './components/dashboard/Dashboard';
import { AuthProvider } from './components/context/AuthProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function DashboardIndex() {
  return (
    <div>
      <AuthProvider>
        {/* <Login/>   */}
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login/>}></Route>
              <Route path="/register" element={<Register/>}></Route>
              <Route path="/dashboard" element={<Dashboard/>}></Route>
          </Routes>
          </BrowserRouter>
      </AuthProvider>
      
    </div>
  )
}

export default DashboardIndex

