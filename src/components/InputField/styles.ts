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

    &.error {
      border: 3px solid red;
    }
  }
  small {
    display: block;
    margin: 8px 0;
    font-size: 10px;
  }
`
