import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import "react-toastify/dist/ReactToastify.css";
import { DivContainerFormLogin, FormLogin } from './StyleLoginForm'
import { Headline, Title1 } from '../../Styles/typography'
import { InputStyled } from '../../Styles/inputs'
import { ButtonGrey, ButtonPink } from '../../Styles/buttons'
import { useContext } from 'react'
import { UserContext } from '../../providers/UserContext'


const Loginform = () => {

  const formSchema = yup.object().shape({
    email: yup.string().required("Email Obrigatório").email("Email Inválido"),
    password: yup.string().required("Senha Obrigatória"),
  })

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(formSchema) });

  const { navigate, loginUser } = useContext(UserContext)

  return (
    <>
      <DivContainerFormLogin>
        <Title1>Login</Title1>
        <FormLogin onSubmit={handleSubmit(loginUser)}>
          <label>Email</label>
          <InputStyled placeholder='Email' {...register("email")} />
          {errors.email?.message}
          <label>Senha</label>
          <InputStyled type="password" placeholder='Senha' {...register("password")} />
          {errors.password?.message}
          <ButtonPink type='submit'>Entrar</ButtonPink>
        </FormLogin>
        <Headline>Ainda não possui conta?</Headline>
        <ButtonGrey className='buttonRegister' onClick={() => navigate("/register")}>Cadastre-se</ButtonGrey>
      </DivContainerFormLogin>

      
    </>

  )
}

export default Loginform