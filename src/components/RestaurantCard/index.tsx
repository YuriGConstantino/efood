import { Tag } from '../Tag'
import {
  Card,
  Image,
  Tags,
  TitleContainer,
  Rating,
  Description,
  Button
} from './styles'

import star from '../../assets/images/estrela.png'

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
    <TitleContainer>
      <h4>{title}</h4>
      <Rating>
        {rating.toFixed(1)}
        <img src={star} alt="" />
      </Rating>
    </TitleContainer>
    <Description>{description}</Description>
    <Button>Saiba Mais</Button>
  </Card>
)
