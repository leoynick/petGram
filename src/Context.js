import React, { createContext, useState } from 'react'
const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, seIsAuth] = useState(false)
  const value = {
    isAuth,
    activateAuth: () => {
      seIsAuth(true)
    }
  }
  return (
    <Context.Provider value={value}>{children}</Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
}
