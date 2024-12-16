import { TagContainer } from './styles'

export type Props = {
  children?: string
}

export const Tag = ({ children }: Props) => (
  <TagContainer>{children}</TagContainer>
)
