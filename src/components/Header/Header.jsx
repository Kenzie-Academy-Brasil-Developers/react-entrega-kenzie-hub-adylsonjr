import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonBlack } from '../../Styles/buttons'
import logo from "../../assets/Logo.png"
import { HeaderContainer } from './StylesHeader'

const Header = () => {
    const navigate = useNavigate()

  return (
    <HeaderContainer>
        <img src={logo} alt="logo kenzie"/>
        <ButtonBlack className='buttonBack' onClick={()=>navigate("/")}>Voltar</ButtonBlack>
    </HeaderContainer>
  )
}

export default Header