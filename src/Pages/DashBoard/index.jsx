import React, { useContext } from 'react'
import logo from "../../assets/Logo.png"
import { ButtonBlack } from '../../Styles/buttons'
import { Headline, Title1 } from '../../Styles/typography'
import { DivContainerDashBoardPage, DivDashBoard, DivTechs, DivUserInfos, HeaderDashBoard, TechCard, TechsList } from './StylesDashBoardPage'
import { UserContext } from '../../providers/UserContext'
import Modal from "react-modal"
import modal from "../../Styles/modal.css"
import ModalAdd from '../../components/modalAdd'
import ModalSet from '../../components/modalSet'


Modal.setAppElement("#root")


const DashBoardPage = () => {

  const { logout, atualUser, techs, openModalAdd, openModalSet, modalSetIsOpen, closeModalSet, modalAddIsOpen, closeModalAdd, setEditTech } = useContext(UserContext)





  return (
    <DivContainerDashBoardPage id='dash'>
      <HeaderDashBoard>
        <img src={logo} alt="kenzie logo" />
        <ButtonBlack className='buttonLogout' onClick={() => logout()}>sair</ButtonBlack>
      </HeaderDashBoard>
      <DivUserInfos>
        <Title1>Olá, {atualUser.name}</Title1>
        <Headline>{atualUser.course_module}</Headline>
      </DivUserInfos>
      <DivDashBoard>
        <DivTechs>
          <Title1>Técnologias</Title1>
          <ButtonBlack className='btnTechs' onClick={() => openModalAdd()}>+</ButtonBlack>
        </DivTechs>
        {techs.length > 0 ? (
          <TechsList>
            {techs.map((tec) => (
              <TechCard key={tec.id} onClick={() => openModalSet(setEditTech(tec))}>
                <Title1>{tec.title}</Title1>
                <Headline>{tec.status}</Headline>
              </TechCard>
            ))}
          </TechsList>
        ) : (
          <Title1>Você ainda não possui tecnologia</Title1>
        )}
      </DivDashBoard>
      <Modal isOpen={modalAddIsOpen}
        onRequestClose={closeModalAdd}
        contentLabel="Modal Add Tech"
        overlayClassName="modal-overlay"
        className="modal-add-tech"
      >
        <ModalAdd />
      </Modal>
      <Modal isOpen={modalSetIsOpen}
        onRequestClose={closeModalSet}
        contentLabel="Modal Set Tech"
        overlayClassName={"modal-set-overlay"}
        className="modal-set-tech">
        <ModalSet />
      </Modal>


    </DivContainerDashBoardPage>
  )
}

export default DashBoardPage