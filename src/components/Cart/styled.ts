import { colors } from './../../styles'
import styled from 'styled-components'

export const Container = styled.div`
  display: none;
  color: ${colors.beige};
  &.showCart {
    display: block;
  }
`
export const CartContanier = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  padding: 32px 8px;
  height: 100%;
  max-width: 360px;
  width: 100%;
  background-color: ${colors.red};
  z-index: 1;
  > p {
    display: flex;
    justify-content: space-between;
    margin: 40px 0 16px;
    font-size: 14px;
    font-weight: 700;
  }

  > button {
    width: 100%;
    background-color: ${colors.beige};
    border: none;
    color: ${colors.red};
    font-size: 14px;
    font-weight: 700;
    padding: 4px;
    cursor: pointer;
  }
`

export const ItemCard = styled.li`
  position: relative;
  background-color: ${colors.beige};
  color: ${colors.red};
  padding: 8px 12px 8px;
  display: flex;
  margin-bottom: 16px;
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }
  p {
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-size: 18px;
    font-weight: bold;

    span {
      font-size: 14px;
      font-weight: 400;
    }
  }
`
export const RemoveBtn = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  img {
    width: 16px;
    height: 16px;
  }
`
