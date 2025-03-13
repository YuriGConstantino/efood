import styled from 'styled-components'
import { colors, device } from '../../styles'

export const FooterContainer = styled.div`
  background-color: ${colors.beige};
  height: 384px;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  margin-top: 120px;

  @media screen and (max-width: ${device.mobile}) {
    height: 300px;
    padding: 23px 0;
  }
`
export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const SocialLinks = styled.div`
  margin: 32px 0 80px;
  display: flex;
  gap: 8px;
  @media screen and (max-width: ${device.mobile}) {
    margin: 32px 0 50px;
  }
`
export const About = styled.p`
  width: 480px;
  font-size: 10px;
  text-align: center;

  @media screen and (max-width: ${device.mobile}) {
    width: 90%;
    line-height: 20px;
    margin-bottom: 20px;
  }
`
