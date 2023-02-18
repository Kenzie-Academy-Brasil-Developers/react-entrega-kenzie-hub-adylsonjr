import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import 'react-toastify/dist/ReactToastify.css';
import { DivContainerFormRegister, FormRegister } from './StylesRegisterForm'
import { Headline, Title1 } from '../../Styles/typography'
import { InputStyled } from '../../Styles/inputs'
import { SelectStyled } from '../../Styles/selectStyle'
import { ButtonPink } from '../../Styles/buttons'
import { UserContext } from '../../providers/UserContext';




const RegisterForm = () => {

    const formSchema = yup.object().shape({
      name: yup.string().required("Nome Obrigatório"),
      email: yup.string().required("Email Obrigatório").email("Email Inválido"),
      password: yup.string().required("Senha Obrigatória").matches("(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$)", "A senha deve conter no mínimo 8 caracteres, ao menos 1 letra maiúscula, 1 letra minuscula, 1 número e um símbolo"),
      confirmPassword: yup.string().required("Confirmação de senha Obrigatória").oneOf([yup.ref("password")], "As senhas devem corresponder"),
      bio: yup.string().required("Bio Obrigatória"),
      contact: yup.string().required("Contato obrigatório"),
      course_module: yup.string().required("Selecione uma opção")
    })

    const {register, handleSubmit, formState:{errors}, reset} = useForm({resolver: yupResolver(formSchema)});
    
    const { registerUser } = useContext(UserContext)

    const submit = (formData)=>{
      registerUser(formData);
      reset() 
    }

  return (
    <DivContainerFormRegister>
    <Title1>Crie sua conta</Title1>
    <Headline>Rápido e grátis, vamos nessa</Headline>
    <FormRegister onSubmit={handleSubmit(submit)}>
        <label>Nome</label>
        <InputStyled placeholder='Nome' {...register("name")} />
        {errors.name && errors.name.message}
        <label >Email</label>
        <InputStyled placeholder='Email' {...register("email")} />
        {errors.email && errors.email.message}
        <label>Senha</label>
        <InputStyled placeholder='Senha' {...register("password")}/>
        {errors.password && errors.password.message}
        <label>Confirmar Senha</label>
        <InputStyled placeholder='Confirmar Senha' {...register("confirmPassword")}/>
        {errors.confirmPassword && errors.confirmPassword.message}
        <label>Bio</label>
        <InputStyled placeholder='Bio' {...register("bio")}/>
        {errors.bio && errors.bio.message}
        <label>Contato</label>
        <InputStyled placeholder='Contato' {...register("contact")}/>
        {errors.contact && errors.contact.message}
        <label>Selecionar Módulo</label>
        <SelectStyled name="" id="" {...register("course_module")}>
        {errors.course_module && errors.course_module.message}
            <option value="Módulo 1(Introdução ao Frontend)" >Modulo1 Introdução ao Frontend </option>
            <option value="Módulo 2(Frontend Intermediário)">Módulo 2 Frontend Intermediário </option>
            <option value="Módulo 3(Frontend Avançado)">Módulo 3 Frontend Avançado </option>
            <option value="Módulo 4(Introdução ao Backend)">Módulo 4 Introdução ao Backend </option>
            <option value="Módulo 5(Backend Intermediário)">Módulo 5 Backend Intermediário </option>
            <option value="Módulo 6(Backend Avançado)">Módulo 6 Backend Avançado </option>
        </SelectStyled>
        <ButtonPink type='submit'>ENVIAR</ButtonPink>
      
    </FormRegister>
    </DivContainerFormRegister>
  )
}

export default RegisterForm