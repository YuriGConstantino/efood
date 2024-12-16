import { TagContainer } from './styles'

export type Props = {
  children: string
}

export const Tag = ({ children = 'small' }: Props) => (
  <TagContainer>{children}</TagContainer>
)
