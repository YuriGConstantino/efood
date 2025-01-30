import InputMask from 'react-input-mask'
import * as S from './styles'

type Props = {
  inputwidth?: string
  htmlForm: string
  label: string
  type: string
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  errorMensage?: string
  mask: string
  min?: string
  max?: string
}

export const Field = ({
  inputwidth,
  htmlForm,
  label,
  type,
  name,
  value,
  onChange,
  errorMensage,
  mask,
  min,
  max
}: Props) => {
  return (
    <S.InputField inputwidth={inputwidth}>
      <label htmlFor={htmlForm}>{label}</label>
      <InputMask
        mask={mask}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
      />
      <small>{errorMensage}</small>
    </S.InputField>
  )
}
