import React from 'react'
import Loginform from '../../components/LoginForm'
import logo from "../../assets/Logo.png"
import { Logo, MainLogin } from './StylesLoginPage'


const LoginPage = () => {
    return (
        <MainLogin>
        <Logo src={logo} alt="Logo kenzie" />
           <Loginform/>
        </MainLogin>
    )
}

export default LoginPage
