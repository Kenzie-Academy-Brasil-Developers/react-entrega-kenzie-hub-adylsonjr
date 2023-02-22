import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { TechsContext } from '../../providers/TechsContext'
import { ButtonRed, ButtonGreyModalSet } from '../../Styles/buttons'
import { InputStyled } from '../../Styles/inputs'
import { SelectStyled } from '../../Styles/selectStyle'
import { Title3 } from '../../Styles/typography'
import { ButtonCloseModalSet, DivButtonsModalSet, DivContainerModalSet, FormModalSet, HeaderModalSet } from './StylesModalSet'
import "react-toastify/dist/ReactToastify.css";


const ModalSet = () => {
    

    const { closeModalSet, upDateTech, deleteTech, editTech } = useContext(TechsContext)

    const { register, handleSubmit, reset } = useForm()

    const submit = (formData) => {
        upDateTech(editTech.id, formData)
        closeModalSet()
        reset()
    }

    const techDel = (id)=>{
        deleteTech(id)
        closeModalSet()
    }

    return (
        <DivContainerModalSet>
            <HeaderModalSet>
                <Title3>Técnologia Detalhes</Title3>
                <ButtonCloseModalSet onClick={() => closeModalSet()}>X</ButtonCloseModalSet>
            </HeaderModalSet>
            <FormModalSet onSubmit={handleSubmit(submit)}>
                <label>Nome</label>
                <InputStyled value={editTech.title} readOnly />
                <label>Selecione um Status</label>
                <SelectStyled  {...register("status")}>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intemediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </SelectStyled>
                <DivButtonsModalSet>
                    <ButtonRed type='submit'>Cadastrar Técnologia</ButtonRed>
                    <ButtonGreyModalSet type="button" onClick={() => techDel(editTech.id) }>Excluir</ButtonGreyModalSet>
                </DivButtonsModalSet>
            </FormModalSet>
        </DivContainerModalSet>
    )
}

export default ModalSet