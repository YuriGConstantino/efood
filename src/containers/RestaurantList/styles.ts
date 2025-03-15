import { device } from './../../styles'
import styled from 'styled-components'

export const RestaurantContainer = styled.div`
  padding-top: 80px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 80px;

  @media screen and (max-width: ${device.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: ${device.tablet}) {
    padding: 0px 50px;
  }
`
