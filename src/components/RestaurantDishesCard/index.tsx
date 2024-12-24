import {
  DishButton,
  DishDescription,
  DishesCard,
  DishImage,
  DishName
} from './styles'

type Props = {
  image: string
  name: string
  description: string
  buttonText: string
}

export const RestaurantDishesCard = ({
  image,
  name,
  description,
  buttonText
}: Props) => (
  <DishesCard>
    <DishImage src={image} alt="Dish" />
    <DishName>{name}</DishName>
    <DishDescription>{description}</DishDescription>
    <DishButton>{buttonText}</DishButton>
  </DishesCard>
)
