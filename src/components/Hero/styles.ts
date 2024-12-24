import styled from 'styled-components'
import { colors } from '../../styles'

export const RestaurantMenuBanner = styled.div`
  height: 280px;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 56px;

  div {
    height: 100%;
    background-color: ${colors.blackOpacity};
  }
  .container {
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 32px 0;
    color: #fff;
    font-size: 32px;

    p {
      font-weight: 100;
    }
  }
`
