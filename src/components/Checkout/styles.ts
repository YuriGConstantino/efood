import styled from 'styled-components'
import { colors } from '../../styles'

type InputGroup = {
  maxWidth?: boolean
}

export const Container = styled.div`
  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }
  button {
    width: 100%;
    background-color: ${colors.beige};
    border: none;
    color: ${colors.red};
    font-size: 14px;
    font-weight: 700;
    padding: 4px;
    margin: 16px 0 8px;
    cursor: pointer;
  }
`
export const InputFild = styled.div<InputGroup>`
  display: ${(props) => (props.maxWidth ? 'inline-block' : 'block')};
  &:nth-child(4) {
    margin-right: 34px;
  }
  label {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
    display: block;
  }
  input {
    background-color: ${colors.beige};
    height: 32px;
    padding: 0 8px;
    margin-bottom: 8px;
    border: 1px solid ${colors.beige};
    width: ${(props) => (props.maxWidth ? '155px' : '100%')};
  }
`
