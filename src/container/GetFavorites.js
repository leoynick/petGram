import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { ListOfFavs } from '../components/ListOfFavs'

const GET_FAVS = gql`
  query getfavs {
    favs {
      id
      categoryId
      likes
      liked
      userId
      src
    }
  }
`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading</p>
  if (error) return <p>error</p>

  const { favs } = data

  return <ListOfFavs favs={favs} />
}

export const FavsWithQuery = () => (
  <Query query={GET_FAVS} fetchPolicy='network-only'>
    {renderProp}
  </Query>
)
