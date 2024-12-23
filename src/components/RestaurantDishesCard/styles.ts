import styled from 'styled-components'
import { colors } from '../../styles'

export const DishesCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.red};
  padding: 8px;
  color: ${colors.beige};
`
export const DishImage = styled.img`
  width: 300px;
  height: 160px;
`

export const DishName = styled.h3`
  font-size: 16px;
  margin-top: 8px;
`

export const DishDescription = styled.p`
  font-size: 14px;
  margin: 8px 0;
`
export const DishButton = styled.button`
  background-color: ${colors.beige};
  color: ${colors.red};
  padding: 8px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  margin-top: auto;
  transition: 0.3s;
  &:hover {
    font-size: 15px;
  }
`
