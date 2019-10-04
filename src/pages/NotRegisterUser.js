import React from 'react'

import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'

export const NotRegisterUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <>
            <RegisterMutation>
              {
                (register, { data, loading, error }) => {
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    register({ variables })
                      .then(data => {
                        const { signup } = data
                        activateAuth(signup)
                      })
                  }

                  const errorMsg = error && 'El usuario ya existe o hay algun problema'

                  return <UserForm error={errorMsg} disabled={loading} onSubmit={onSubmit} title='Registrarse' />
                }
              }
            </RegisterMutation>

            <UserForm onSubmit={activateAuth} title='Iniciar Sesion' />
          </>
        )
      }
    }
  </Context.Consumer>
)
