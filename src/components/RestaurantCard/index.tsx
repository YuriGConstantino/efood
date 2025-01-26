import { Tag } from '../Tag'
import * as S from './styles'

import star from '../../assets/images/estrela.png'
import { Link } from 'react-router'

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
}: Props) => (
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
      <S.Description>{description}</S.Description>
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
