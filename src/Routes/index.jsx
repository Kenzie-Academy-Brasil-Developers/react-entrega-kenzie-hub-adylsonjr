import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DashBoardPage from '../Pages/DashBoard'
import LoginPage from '../Pages/Login'
import ProtectedRoute from '../Pages/protectedRoute'
import RegiterPage from '../Pages/Register'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/register' element={<RegiterPage />} />
      <Route path='*' element={<h1>404 Pagína não encontrada</h1>} />
      <Route path='/dashboard' element={<ProtectedRoute />}>
        <Route path='/dashboard' element={<DashBoardPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes