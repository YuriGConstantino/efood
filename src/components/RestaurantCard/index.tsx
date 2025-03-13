import { Tag } from '../Tag'
import * as S from './styles'

import star from '../../assets/images/estrela.png'
import { Link } from 'react-router'
import { device } from '../../styles'
import { useEffect, useState } from 'react'

type Props = {
  imagem: string
  highlightTag: boolean
  type: string
  title: string
  rating: number
  description: string
  id: number
}

export const RestaurantCard = ({
  imagem,
  highlightTag,
  type,
  title,
  rating,
  description,
  id
}: Props) => {
  //faz a descrição do card ser menor em telas menores
  const [shortDescription, setShortDescription] = useState(description)

  const getDescription = (description: string) => {
    const screenWidth = window.innerWidth
    let maxLength
    //pode ser adicionado um else if para outros tamanhos de tela
    if (screenWidth <= parseInt(device.mobile)) {
      maxLength = 200
    } else {
      maxLength = 1000
    }
    //faz o retono da descrição
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + '...'
    }
    return description
  }

  useEffect(() => {
    const handleResize = () => {
      setShortDescription(getDescription(description))
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [description])

  return (
    <S.Card>
      <S.Image src={imagem} alt={title} />
      <S.Tags>
        {highlightTag ? <Tag>Destaque da semana</Tag> : ''}
        <Tag>{type}</Tag>
      </S.Tags>
      <S.InfoContainer>
        <S.TitleContainer>
          <h4>{title}</h4>
          <S.Rating>
            {rating}
            <img src={star} alt="" />
          </S.Rating>
        </S.TitleContainer>
        <S.Description>{shortDescription}</S.Description>
        <Link
          className="link"
          title="about"
          type="link"
          to={`/restaurantes/${id}`}
        >
          Saiba Mais
        </Link>
      </S.InfoContainer>
    </S.Card>
  )
}
