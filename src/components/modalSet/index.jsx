import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { UserContext } from '../../providers/UserContext'
import { ButtonRed, ButtonGreyModalSet } from '../../Styles/buttons'
import { InputStyled } from '../../Styles/inputs'
import { SelectStyled } from '../../Styles/selectStyle'
import { Title3 } from '../../Styles/typography'
import { ButtonCloseModalSet, DivButtonsModalSet, DivContainerModalSet, FormModalSet, HeaderModalSet } from './StylesModalSet'

const ModalSet = () => {
    const { editTech } = useContext(UserContext)

    const { closeModalSet, upDateTech, deleteTech } = useContext(UserContext)

    const { register, handleSubmit, reset } = useForm()

    const submit = (formData) => {
        upDateTech(editTech.id, formData)
        reset()
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
                    <ButtonGreyModalSet type="button" onClick={() => deleteTech(editTech.id)}>Excluir</ButtonGreyModalSet>
                </DivButtonsModalSet>
            </FormModalSet>
        </DivContainerModalSet>
    )
}

export default ModalSet