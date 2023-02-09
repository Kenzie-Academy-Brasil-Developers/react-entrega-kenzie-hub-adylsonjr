import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom'
import { api } from '../../Services/api'
import { DivContainerFormLogin, FormLogin } from './StyleLoginForm'
import { Headline, Title1 } from '../../Styles/typography'
import { InputStyled } from '../../Styles/inputs'
import { ButtonGrey, ButtonPink } from '../../Styles/buttons'


const Loginform = () => {

  const formSchema = yup.object().shape({
    email: yup.string().required("Email Obrigatório").email("Email Inválido"),
    password: yup.string().required("Senha Obrigatória"),
  })

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(formSchema) });
  const navigate = useNavigate()
  const loginUser = async (data) => {
    console.log(data)
    try {
      const response = await api.post("/sessions", data)
      toast.success("Login efetuado com sucesso")
      localStorage.setItem("@TOKEN", response.data.token)
      localStorage.setItem("@USERID", response.data.user.id)
      console.log(response.data)
      navigate("/dashboard")

    } catch (error) {
      console.log(error)
      toast.error("Ops, algo deu errado")
    }
  }

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