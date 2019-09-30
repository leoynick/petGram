import React from 'react'
import { Router } from '@reach/router'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisterUser } from './pages/NotRegisterUser'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'

import { GlobalStyle } from './styles/GlobalStyles'

const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
      </Router>
      <UserLogged>
        {({ isAuth }) =>
          isAuth
            ? (
              <Router>
                <Favs path='/favs' />
                <User path='/user' />
              </Router>)
            : (
              <Router>
                <NotRegisterUser path='/favs' />
                <NotRegisterUser path='/user' />
              </Router>)}
      </UserLogged>
      <NavBar />
    </>
  )
}
