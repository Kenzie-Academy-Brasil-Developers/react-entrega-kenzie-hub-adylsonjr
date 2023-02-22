import { useContext, useState } from "react";
import { createContext } from "react";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify"
import { api } from "../Services/api";



export const TechsContext = createContext({})

export const TechsProvider = ({ children }) => {
    const { techs, setTechs } = useContext(UserContext)

    const [modalAddIsOpen, setModalAddIsOpen] = useState(false)

    const [modalSetIsOpen, setModalSetIsOpen] = useState(false)

    const [editTech, setEditTech] = useState(null)

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
            const newTechs = techs.filter(tech => tech.id !== id);
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
        <TechsContext.Provider value={
            {
                modalAddIsOpen,
                setModalAddIsOpen,
                modalSetIsOpen,
                setModalSetIsOpen,
                editTech,
                setEditTech,
                createTech,
                upDateTech,
                deleteTech,
                openModalAdd,
                closeModalAdd,
                openModalSet,
                closeModalSet,
            }
        }>
            {children}
        </TechsContext.Provider>
    )

}