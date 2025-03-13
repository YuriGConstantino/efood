import styled from 'styled-components'
import banner from '../../assets/images/Banner.png'
import { colors, device } from '../../styles'

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
    width: min(100%, 539px);
    margin-top: min(136px, 11%);
  }
  @media screen and (max-width: ${device.mobile}) {
    p {
      font-size: 24px;
      line-height: 30px;
    }
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
