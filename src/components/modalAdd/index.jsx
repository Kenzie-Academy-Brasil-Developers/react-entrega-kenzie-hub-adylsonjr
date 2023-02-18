import React from 'react'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import "react-toastify/dist/ReactToastify.css"; 
import { ButtonPink } from '../../Styles/buttons'
import { InputStyled } from '../../Styles/inputs'
import { SelectStyled } from '../../Styles/selectStyle'
import { Title3 } from '../../Styles/typography'
import { ButtonCloseModalAdd, DivContainerModalAdd, FormModalAdd, HeaderModalAdd } from './StylesModalAdd'
import { UserContext } from '../../providers/UserContext';

const ModalAdd = () => {
    
    const { register, handleSubmit, reset } = useForm();

    const {createTech, closeModalAdd} = useContext(UserContext)

    const submit = (formData)=>{
        createTech(formData)
        reset()
    }

  return (
    <DivContainerModalAdd>
    <HeaderModalAdd>
        <Title3>Cadastrar Técnologia</Title3>
        <ButtonCloseModalAdd onClick={()=>closeModalAdd()}>X</ButtonCloseModalAdd>
    </HeaderModalAdd>
    <FormModalAdd onSubmit={handleSubmit(submit)}>
        <label>Nome</label>
        <InputStyled placeholder='Nome' {...register("title")} />
        <label>Selecione um Status</label>
        <SelectStyled {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intemediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
        </SelectStyled>
        <ButtonPink type='submit'>Cadastrar Técnologia</ButtonPink>
    </FormModalAdd>
    </DivContainerModalAdd>
  )
}

export default ModalAdd