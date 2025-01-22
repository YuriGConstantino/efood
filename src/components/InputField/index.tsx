import { InputField } from './styles'

type Props = {
  inputwidth?: string
  htmlForm: string
  label: string
  type: string
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string | number | readonly string[] | undefined
  getError?: string | number | readonly string[] | undefined
}

export const Field = ({
  inputwidth,
  htmlForm,
  label,
  type,
  name,
  value,
  onChange,
  getError
}: Props) => {
  return (
    <InputField inputwidth={inputwidth}>
      <label htmlFor={htmlForm}>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} />
      <small>{getError}</small>
    </InputField>
  )
}
