import styled from 'styled-components'
import { colors, device } from '../../styles'
import { Button } from '../Button'

export const DishesCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.red};
  padding: 8px;
  color: ${colors.beige};
  @media screen and (max-width: ${device.mobile}) {
  }
`
export const DishImage = styled.img`
  object-fit: cover;
  height: 168px;
  width: 100%;
`

export const DishName = styled.h3`
  font-size: 16px;
  margin-top: 8px;
`

export const DishDescription = styled.p`
  font-size: 14px;
  margin: 8px 0;
  @media screen and (max-width: ${device.mobile}) {
    margin: 16px 0;
  }
`
export const DishButton = styled(Button)`
  background-color: ${colors.beige};
  color: ${colors.red};
  padding: 4px 8px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  margin-top: auto;
`
export const ModalContainer = styled.div`
  position: fixed;
  display: none;
  align-items: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  &&.show {
    display: flex;
  }
`

export const Modal = styled.div`
  position: relative;
  background-color: ${colors.red};
  color: #fff;
  display: flex;
  gap: 24px;
  padding: 32px;
  z-index: 1;
  > img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  @media screen and (max-width: ${device.mobile}) {
    flex-direction: column;
    gap: 16px;
    padding: 32px 16px;
    > img {
      width: 100%;
      height: 200px;
    }
  }
`

export const ModalInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  @media screen and (max-width: ${device.mobile}) {
    gap: 16px;
  }
`

export const ModalClose = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  margin: 8px 8px 0;
  cursor: pointer;
`

export const ModalButton = styled(Button)`
  background-color: ${colors.beige};
  color: ${colors.red};
  padding: 4px 8px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
`
