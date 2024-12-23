import React from 'react'
import {
  DishButton,
  DishDescription,
  DishesCard,
  DishImage,
  DishName
} from './styles'

interface RestaurantDishesCardProps {
  image: string
  name: string
  description: string
  buttonText: string
  onButtonClick: () => void
  key: string
}

export const RestaurantDishesCard: React.FC<RestaurantDishesCardProps> = ({
  image,
  name,
  description,
  buttonText,
  onButtonClick
}) => {
  return (
    <DishesCard>
      <DishImage src={image} alt="Dish" />
      <DishName>{name}</DishName>
      <DishDescription>{description}</DishDescription>
      <DishButton onClick={onButtonClick}>{buttonText}</DishButton>
    </DishesCard>
  )
}
