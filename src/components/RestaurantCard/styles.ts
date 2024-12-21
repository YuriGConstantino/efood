import styled from 'styled-components'
import { colors } from '../../styles'
import { Button as BtnComponet } from '../Button'

export const Card = styled.div`
  background-color: #fff;
  position: relative;
  padding-bottom: 8px;
  .button {
    border: none;
    background-color: ${colors.red};
    color: ${colors.beige};
    font-weight: bold;
    margin: 0 8px;
    padding: 4px 6px;
    cursor: pointer;
    text-decoration: none;
  }
`
export const Image = styled.img`
  width: 100%;
  height: 300px;
`
export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
  margin: 8px 0 16px;
  padding: 0 8px;
`
export const Rating = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 16px;
  padding: 0 8px;
`
