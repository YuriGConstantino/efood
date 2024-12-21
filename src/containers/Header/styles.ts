import styled from 'styled-components'
import banner from '../../assets/images/Banner.png'

export const HeaderContainer = styled.div`
  background-image: url(${banner});
  padding: 32px 0;
  display: flex;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`

export const Text = styled.p`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  width: 539px;
  margin-top: 136px;
`
