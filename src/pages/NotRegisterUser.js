import React from 'react'

import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

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

            <LoginMutation>
              {(login, { data, loading, error }) => {
                const onSubmit = ({ email, password }) => {
                  const input = { email, password }
                  const variables = { input }
                  login({ variables })
                    .then(activateAuth)
                }

                const errorMsg = error && 'La contraseña es incorrecta o el usuario no existe'

                return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Iniciar Sesion' />
              }}
            </LoginMutation>

          </>
        )
      }
    }
  </Context.Consumer>
)
