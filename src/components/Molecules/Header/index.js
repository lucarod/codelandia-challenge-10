import NextLink from 'next/link'
import Logo from '../../Atoms/Logo'
import { StyledHeader, Nav, NavLink, HeaderButton } from './style'

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Nav>
        <NextLink href="#" passHref>
          <NavLink className='active'>Home</NavLink>
        </NextLink>
        <NextLink href="#" passHref>
          <NavLink active>Séries</NavLink>
        </NextLink>
        <NextLink href="#" passHref>
          <NavLink active>Filmes</NavLink>
        </NextLink>
        <NextLink href="#" passHref>
          <NavLink active>Animes</NavLink>
        </NextLink>
        <NextLink href="#" passHref>
          <NavLink active>Games</NavLink>
        </NextLink>
        <NextLink href="#" passHref>
          <HeaderButton>Minha conta</HeaderButton>
        </NextLink>
      </Nav>
    </StyledHeader>
  )
}

export default Header
