import NextLink from 'next/link'
import { StyledLink } from './style'

const Link = ({ href, name, variant = 'primary' }) => {
  return (
    <NextLink href={href} passHref>
      <StyledLink variant={variant}>{name}</StyledLink>
    </NextLink>
  )
}

export default Link
