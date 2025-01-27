import * as S from './styles'

type Props = {
  inputwidth?: string
  htmlForm: string
  label: string
  type: string
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string | number | readonly string[] | undefined
  className: string
}

export const Field = ({
  inputwidth,
  htmlForm,
  label,
  type,
  name,
  value,
  className,
  onChange
}: Props) => {
  return (
    <S.InputField inputwidth={inputwidth}>
      <label htmlFor={htmlForm}>{label}</label>
      <input
        className={className}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </S.InputField>
  )
}
