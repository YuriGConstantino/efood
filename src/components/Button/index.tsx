import { Link } from 'react-router'

type Props = {
  type: 'button' | 'link'
  className: string
  to?: string
  onClick?: () => void
  children: string | JSX.Element | number
}

export const Button = ({ type, className, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <button type="button" className={className} onClick={onClick}>
        {children}
      </button>
    )
  }

  return (
    <Link className={className} to={to as string}>
      {children}
    </Link>
  )
}
