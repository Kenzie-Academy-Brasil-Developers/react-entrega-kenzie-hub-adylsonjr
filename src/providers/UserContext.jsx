import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { api } from "../Services/api";
import { toast } from "react-toastify";



export const UserContext = createContext({})

export const UserProvider = ({ children }) => {

  const [atualUser, setAtualUser] = useState(null)

  const [modalAddIsOpen, setModalAddIsOpen] = useState(false)

  const [modalSetIsOpen, setModalSetIsOpen] = useState(false)

  const [techs, setTechs] = useState([])

  const [editTech, setEditTech] = useState(null)

  useEffect(() => {
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

  }, [])

  const navigate = useNavigate()

  const registerUser = async (data) => {
    console.log(data)
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

  const createTech = async (data) => {
    const token = localStorage.getItem("@TOKEN")
    try {
      const response = await api.post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setTechs([...techs, response.data])
      toast.success("Técnologia criada com sucesso")
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    }
  }

  const upDateTech = async (id, data) => {
    const token = localStorage.getItem("@TOKEN")
    try {
      const response = await api.put(`/users/techs/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const newTechs = techs.map(tech => {
        if (id === tech.id) {
          return [...techs, response.data]
        } else {
          return techs
        }
      })
      setTechs(newTechs)
      toast.success("Técnologia atualizada")
    } catch (error) {
      console.log(error)
      toast.error(error.response)
    }
  }

  const deleteTech = async (id) => {
    const token = localStorage.getItem("@TOKEN")
    try {
      const response = await api.delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const newTechs = techs.filter(tech=> tech.id !== id);
      setTechs(newTechs)

    } catch (error) {
      console.log(error)
    }
  }

  const openModalAdd = () => {
    setModalAddIsOpen(true)
  }

  const closeModalAdd = () => {
    setModalAddIsOpen(false)
  }

  const openModalSet = () => {
    setModalSetIsOpen(true)

  }

  const closeModalSet = () => {
    setModalSetIsOpen(false)
  }


  return (
    <UserContext.Provider value={{
      atualUser,
      loginUser,
      navigate,
      registerUser,
      logout,
      setAtualUser,
      modalAddIsOpen,
      modalSetIsOpen,
      createTech,
      upDateTech,
      openModalAdd,
      closeModalAdd,
      openModalSet,
      closeModalSet,
      techs,
      editTech,
      setEditTech,
      deleteTech
    }} >
      {children}
    </UserContext.Provider>
  )
}