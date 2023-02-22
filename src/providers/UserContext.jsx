import { createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { api } from "../Services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {

  const [atualUser, setAtualUser] = useState(null)

  const [techs, setTechs] = useState([])

  const getUser = ()=>{
    const token = localStorage.getItem("@TOKEN")
    if (token) {
      const loadingUser = async () => {
        try {
          const response = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          setAtualUser(response.data)
          setTechs(response.data.techs)
          navigate("/dashboard")
        } catch (error) {
          console.log(error)
          localStorage.removeItem("@TOKEN")
        }
      }
      loadingUser()
    }
  }

  useEffect(() => {
   getUser()
  }, [])

  const navigate = useNavigate()

  const registerUser = async (data) => {
    try {
      const response = await api.post("/users", data)
      navigate("/")
      toast.success("Usuário cadastrado com sucesso")

    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    }
  }

  const loginUser = async (data) => {
    try {
      const response = await api.post("/sessions", data)
      setAtualUser(response.data.user)
      setTechs(response.data.user.techs)
      localStorage.setItem("@TOKEN", response.data.token)
      localStorage.setItem("@USERID", response.data.user.id)
      navigate("/dashboard")
      toast.success("Login efetuado com sucesso")

    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    }
  }

  const logout = () => {
    localStorage.removeItem("@TOKEN")
    setAtualUser(null)
    navigate("/")
  }


  return (
    <UserContext.Provider value={{
      atualUser,
      loginUser,
      navigate,
      registerUser,
      logout,
      setAtualUser,
      techs,
      setTechs,
      getUser
    }} >
      {children}
    </UserContext.Provider>
  )
}