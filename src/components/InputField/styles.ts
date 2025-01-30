import styled from 'styled-components'
import { colors } from '../../styles'
type InputGroup = {
  inputwidth?: string
}
export const InputField = styled.div<InputGroup>`
  display: ${(props) => (props.inputwidth ? 'inline-block' : 'block')};
  width: ${(props) => (props.inputwidth ? '' : '100%')};
  label {
    font-size: 14px;
    font-weight: bold;
    margin: 8px 0;
    display: block;
  }
  input {
    width: ${(props) => props.inputwidth || '100%'};
    background-color: ${colors.beige};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${colors.beige};
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      display: none;
      -webkit-appearance: none;
      margin: 0;
    }
  }
  small {
    display: block;
    margin-top: 4px;
    font-size: 10px;
  }
`
