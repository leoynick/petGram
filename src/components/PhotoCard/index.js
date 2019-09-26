import React from 'react'
import { MdFavoriteBorder } from 'react-icons/md'

import { ImgWrapper, Img, Button } from './styles'

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1553987882-91d92995e16c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => (
  <article>
    <a href={`/detail/${id}`}>
      <ImgWrapper>
        <Img src={src} />
      </ImgWrapper>
    </a>

    <Button>
      <MdFavoriteBorder size='32px' />
      {likes} likes!
    </Button>
  </article>
)
