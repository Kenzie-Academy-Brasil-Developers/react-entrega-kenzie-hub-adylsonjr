import React from 'react'
import { UserProvider } from "./UserContext"
import { TechsProvider } from './TechsContext'

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <TechsProvider>
        {children}
      </TechsProvider>
    </UserProvider>
  )
}

export default Providers