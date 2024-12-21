import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.div`
  background-color: ${colors.beige};
  height: 384px;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  margin-top: 120px;
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
`
export const About = styled.p`
  width: 480px;
  font-size: 10px;
  text-align: center;
`
