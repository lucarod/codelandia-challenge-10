import Logo from '../../Atoms/Logo'
import { StyledHeader, Nav, HeaderButton } from './style'

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Nav>
        <a className='active'>Home</a>
        <a>Séries</a>
        <a>Filmes</a>
        <a>Animes</a>
        <a>Games</a>
        <HeaderButton>Minha conta</HeaderButton>
      </Nav>
    </StyledHeader>
  )
}

export default Header
