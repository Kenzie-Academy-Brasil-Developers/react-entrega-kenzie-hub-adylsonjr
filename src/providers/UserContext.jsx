import { createContext } from "react";
import { useNavigate } from 'react-router-dom'
import { api } from "../Services/api";
import { toast } from "react-toastify";
import { useState } from "react";
import { useEffect } from "react";

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {

    const navigate = useNavigate()

    const registerUser = async (data)=> {
        console.log(data)
        try{
         const response = await api.post("/users", data)
          navigate("/")
          toast.success("Usuário cadastrado com sucesso")
          console.log(response.data)
          
        }catch(error){
          console.log(error)
          toast.error(error.message)
        }
      }

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

  const [atualUser, setAtualUser] = useState({})

  useEffect(() => {
    const loadingUser = async () => {

      try {
        const response = await api.get(`/users/${localStorage.getItem("@USERID")}`)
        console.log(response)
        setUser(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    loadingUser()

  }, [])

  

  const logout = () => {
    localStorage.clear()
    navigate("/")
  }

    return (
        <UserContext.Provider value={{
            loginUser,
            navigate,
            registerUser,
            loginUser,
            logout,
            atualUser
        }} >
            {children}
        </UserContext.Provider>
    )
}