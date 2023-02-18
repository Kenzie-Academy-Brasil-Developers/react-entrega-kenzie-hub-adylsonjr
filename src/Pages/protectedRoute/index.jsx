import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { UserContext } from '../../providers/UserContext'

const ProtectedRoute = () => {

    const { atualUser } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(()=>{
        if(!atualUser){
            navigate("/")
        }
    },[])

  return (
    <>
        {atualUser ? <Outlet/>:null}
    </>
  )
}

export default ProtectedRoute