import React from 'react'
// import { TechsProvider } from './TechsCotext'
import { UserProvider } from './UserContext'

const Providers = ({ children }) => {
  return (
    <UserProvider>

      {children}

    </UserProvider>
  )
}

export default Providers