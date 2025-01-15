// import { Tag } from '../Tag'
// import {
//   Card,
//   Image,
//   Tags,
//   TitleContainer,
//   Rating,
//   Description,
//   InfoContainer
// } from './styles'

// import star from '../../assets/images/estrela.png'
// import { Link } from 'react-router'

// type Props = {
//   imagem: string
//   highlightTag: boolean
//   type: string
//   title: string
//   rating: number
//   description: string
//   id: number
// }

// export const RestaurantCard = ({
//   imagem,
//   highlightTag,
//   type,
//   title,
//   rating,
//   description,
//   id
// }: Props) => (
//   <Card>
//     <Image src={imagem} alt={title} />
//     <Tags>
//       {highlightTag ? <Tag>Destaque da semana</Tag> : ''}
//       <Tag>{type}</Tag>
//     </Tags>
//     <InfoContainer>
//       <TitleContainer>
//         <h4>{title}</h4>
//         <Rating>
//           {rating}
//           <img src={star} alt="" />
//         </Rating>
//       </TitleContainer>
//       <Description>{description}</Description>
//       <Link
//         className="link"
//         title="about"
//         type="link"
//         to={`/restaurantes/${id}`}
//       >
//         Saiba Mais
//       </Link>
//     </InfoContainer>
//   </Card>
// )
