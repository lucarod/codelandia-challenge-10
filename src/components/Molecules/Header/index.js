import { StyledHeader, Logo, Nav, HeaderButton } from './style'

const Header = () => {
  return (
    <StyledHeader>
      <Logo>Naped</Logo>
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
