import React from 'react'
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