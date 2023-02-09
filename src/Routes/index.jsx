import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DashBoardPage from '../Pages/DashBoard'
import LoginPage from '../Pages/Login'
import RegiterPage from '../Pages/Register'

const AppRoutes = () => {
  return (
   <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/register' element={<RegiterPage/>}/>
        <Route path='/dashboard' element={<DashBoardPage/>}/>
        <Route path='*' element={<h1>404 Pagína não encontrada</h1>}/>
   </Routes>
  )
}

export default AppRoutes