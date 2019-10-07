import React from 'react'
import { Helmet } from 'react-helmet'

import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'

const HomePage = ({ categoryId }) => {
  return (
    <>
      <Helmet>
        <title>"Petgram - tu app de fotos de mascotas</title>
        <meta name='description' content='Con petgram puedes encontrar de animales domésticos' />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </>
  )
}

export const Home = React.memo(HomePage)
