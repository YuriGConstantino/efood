import { Tag } from '../Tag'
import {
  Card,
  Image,
  Tags,
  TitleContainer,
  Rating,
  Description,
  InfoContainer
} from './styles'

import star from '../../assets/images/estrela.png'
import { Button } from '../Button'
import { Link } from 'react-router'

type Props = {
  imagem: string
  highlightTag: string
  categoryTag: string
  title: string
  rating: number
  description: string
}

export const RestaurantCard = ({
  imagem,
  highlightTag,
  categoryTag,
  title,
  rating,
  description
}: Props) => (
  <Card>
    <Image src={imagem} alt={title} />
    <Tags>
      {highlightTag.length > 1 ? <Tag>{highlightTag}</Tag> : ''}
      <Tag>{categoryTag}</Tag>
    </Tags>
    <InfoContainer>
      <TitleContainer>
        <h4>{title}</h4>
        <Rating>
          {rating.toFixed(1)}
          <img src={star} alt="" />
        </Rating>
      </TitleContainer>
      <Description>{description}</Description>
      <Link
        className="link"
        title="about"
        type="link"
        to={`/restaurant/${title.replace(/\s+/g, '')}`}
      >
        Saiba Mais
      </Link>
    </InfoContainer>
  </Card>
)
