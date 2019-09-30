import React from 'react'
import { Router } from '@reach/router'

import { Home } from './pages/Home'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'

import { GlobalStyle } from './styles/GlobalStyles'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : (
            <Router>
              <Home path='/' />
              <Home path='/pet/:categoryId' />
            </Router>
          )
      }
    </>
  )
}
