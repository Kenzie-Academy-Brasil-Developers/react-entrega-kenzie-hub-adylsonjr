import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import RegisterForm from '../../components/RegisterForn'
import { MainRegister } from './StylesRegisterPage'


const RegiterPage = () => {
  return (
    <MainRegister>
        <Header/>
        <RegisterForm/>
    </MainRegister>
  )
}

export default RegiterPage