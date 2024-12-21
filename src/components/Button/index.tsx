import { Link } from 'react-router'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string | JSX.Element
  className: string
}

export const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  className
}: Props) => {
  if (type === 'button') {
    return (
      <button
        type="button"
        title={title}
        onClick={onClick}
        className={className}
      >
        {children}
      </button>
    )
  }

  return (
    <Link to={to as string} title={title} className={className}>
      {children}
    </Link>
  )
}
