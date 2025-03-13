import styled from 'styled-components'
import { colors, device } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.red};
  color: ${colors.beige};
  font-weight: bold;
  display: inline-block;
  margin: 8px;
  padding: 4px 6px;
  margin-right: 8px;

  @media screen and (max-width: ${device.mobile}) {
    font-size: 12px;
  }
`
