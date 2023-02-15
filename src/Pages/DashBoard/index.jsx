import React, { useContext } from 'react'
import logo from "../../assets/Logo.png"
import { ButtonBlack } from '../../Styles/buttons'
import { Headline, HeadlineDash, Title1 } from '../../Styles/typography'
import { DivContainerDashBoardPage, DivDashBoard, DivUserInfos, HeaderDashBoard } from './StylesDashBoardPage'
import { UserContext } from '../../providers/UserContext'

const DashBoardPage = () => {


  const {logout, atualUser} = useContext(UserContext)

  return (
    <DivContainerDashBoardPage>
      <HeaderDashBoard>
        <img src={logo} alt="kenzie logo" />
        <ButtonBlack className='buttonLogout' onClick={() => logout()}>sair</ButtonBlack>
      </HeaderDashBoard>
      <DivUserInfos>
      <Title1>Olá, {atualUser.name}</Title1>
      <Headline>{atualUser.course_module}</Headline>
      </DivUserInfos>
      <DivDashBoard>
      <Title1>Que pena! Estamos em desenvolvimento :(</Title1>
      <HeadlineDash>Nossa aplicação está em desenvolvimento, em breve teremos novidades</HeadlineDash>
      </DivDashBoard>
     
      
    </DivContainerDashBoardPage>
  )
}

export default DashBoardPage