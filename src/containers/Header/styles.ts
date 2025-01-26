import styled from 'styled-components'
import banner from '../../assets/images/Banner.png'
import { colors } from '../../styles'

export const HeaderContainer = styled.div`
  background-image: url(${banner});
  padding: 32px 0;
  display: flex;
  font-size: 18px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .button {
    font-weight: bold;
    color: ${colors.red};
    background: transparent;
    border: none;
    text-decoration: none;
  }
  .buttonTxt {
    font-size: 18px;
    cursor: pointer;
  }
  p {
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    width: 539px;
    margin-top: 136px;
  }
`

export const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  bottom: 40px;
  position: relative;
`
