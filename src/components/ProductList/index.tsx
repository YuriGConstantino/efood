import Restaurant from '../../models/restaurant'
import { Product } from '../Product'
import { ProductsContainer, List } from './styles'

type Props = {
  restaurant: Restaurant[]
}

export const ProdutcList = ({ restaurant }: Props) => (
  <ProductsContainer>
    <List>
      {restaurant.map((restaurant) => (
        <Product
          key={restaurant.id}
          imagem={restaurant.image}
          highlightTag={restaurant.highlightTag}
          categoryTag={restaurant.categoryTag}
          title={restaurant.title}
          rating={restaurant.rating}
          description={restaurant.description}
        />
      ))}
    </List>
  </ProductsContainer>
)
