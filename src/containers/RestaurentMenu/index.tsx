import { RestaurantDishesCard } from '../../components/RestaurantDishesCard'
import { DishesContainer, RestaurantMenuBanner } from './styles'

import dishImg from '../../assets/images/Hioki_Sushi.png'

const Dishes = [
  {
    image: dishImg,
    name: 'Sushi de salmão',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sapiente consequuntur eaque nesciunt placeat sequi.',
    buttonText: 'Adicionar ao carrinho'
  },
  {
    image: dishImg,
    name: 'Sushi de salmão',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sapiente consequuntur eaque nesciunt placeat sequi.',
    buttonText: 'Adicionar ao carrinho'
  },
  {
    image: dishImg,
    name: 'Sushi de salmão',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sapiente consequuntur eaque nesciunt placeat sequi.',
    buttonText: 'Adicionar ao carrinho'
  },
  {
    image: dishImg,
    name: 'Sushi de salmão',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sapiente consequuntur eaque nesciunt placeat sequi.',
    buttonText: 'Adicionar ao carrinho'
  },
  {
    image: dishImg,
    name: 'Sushi de salmão',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sapiente consequuntur eaque nesciunt placeat sequi.',
    buttonText: 'Adicionar ao carrinho'
  },
  {
    image: dishImg,
    name: 'Sushi de salmão',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sapiente consequuntur eaque nesciunt placeat sequi.',
    buttonText: 'Adicionar ao carrinho'
  }
]

export const RestaurentMenu = () => (
  <>
    <RestaurantMenuBanner>
      <div>
        <div className="container">
          <p>Japonesa</p>
          <h2>Hioki Sushi</h2>
        </div>
      </div>
    </RestaurantMenuBanner>
    <DishesContainer className="container">
      {Dishes.map((dish) => (
        <RestaurantDishesCard
          name={dish.name}
          image={dish.image}
          description={dish.description}
          buttonText={dish.buttonText}
          key={dish.name}
          onButtonClick={() => {
            'Adicionar ao carrinho'
          }}
        />
      ))}
    </DishesContainer>
  </>
)
