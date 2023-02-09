import React from 'react'
import { useEffect } from 'react'
import { api } from '../../Services/api'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import logo from "../../assets/Logo.png"
import { ButtonBlack } from '../../Styles/buttons'
import { Headline, HeadlineDash, Title1 } from '../../Styles/typography'
import { DivContainerDashBoardPage, DivDashBoard, DivUserInfos, HeaderDashBoard } from './StylesDashBoardPage'

const DashBoardPage = () => {

  const [user, setUser] = useState([])

  useEffect(() => {
    const loadingUser = async () => {

      try {
        const response = await api.get(`/users/${localStorage.getItem("@USERID")}`)
        setUser(response.data)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
    loadingUser()

  }, [])

  const navigate = useNavigate()

  const logout = () => {
    localStorage.clear()
    navigate("/")
  }

  return (
    <DivContainerDashBoardPage>
      <HeaderDashBoard>
        <img src={logo} alt="kenzie logo" />
        <ButtonBlack className='buttonLogout' onClick={() => logout()}>sair</ButtonBlack>
      </HeaderDashBoard>
      <DivUserInfos>
      <Title1>Olá, {user.name}</Title1>
      <Headline>{user.course_module}</Headline>
      </DivUserInfos>
      <DivDashBoard>
      <Title1>Que pena! Estamos em desenvolvimento :(</Title1>
      <HeadlineDash>Nossa aplicação está em desenvolvimento, em breve teremos novidades</HeadlineDash>
      </DivDashBoard>
     
      
    </DivContainerDashBoardPage>
  )
}

export default DashBoardPage