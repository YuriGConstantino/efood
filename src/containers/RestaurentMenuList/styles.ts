import { device } from './../../styles'
import styled from 'styled-components'

export const MenuContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media screen and (max-width: ${device.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: ${device.tablet}) {
    grid-template-columns: 1fr 1fr;
    padding: 0px 50px;
  }
`
