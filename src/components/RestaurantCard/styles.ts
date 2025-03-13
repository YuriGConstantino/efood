import styled from 'styled-components'
import { colors, device } from '../../styles'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  position: relative;

  .link {
    border: none;
    background-color: ${colors.red};
    color: ${colors.beige};
    font-weight: bold;
    font-size: 14px;
    padding: 4px 6px;
    margin: 0 0 8px 8px;
    cursor: pointer;
    text-decoration: none;
  }

  @media screen and (max-width: ${device.mobile}) {
    width: 100%;
    max-width: 300px;
  }
`
export const Image = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`
export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const InfoContainer = styled.div`
  border: 1px solid ${colors.red};
  border-top: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
`
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 8px 0 0;
  padding: 0 8px 0;
  font-size: 18px;
  font-weight: bold;
`
export const Rating = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 24px;
  padding: 0 8px;
  margin: 16px 0;
`
