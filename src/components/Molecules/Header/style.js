import styled from 'styled-components'

export const StyledHeader = styled.header`
  margin: 26px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 60px;

  & > a {
    cursor: pointer;
    font-family: ${({ theme }) => theme.fonts.inter};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textGrey};
    transition: color 0.4s ease;
    font-size: 16px;

    &::after {
      content: "";
      display: block;
      margin: auto;
      height: 2px;
      width: 0;
      top: 5px;
      background: transparent;
      transition: all 0.3s;
    }

    &.active,
    &:hover {
      color: ${({ theme }) => theme.colors.textWhite};
    }

    &.active::after,
    &:hover::after {
      width: 100%;
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`

export const HeaderButton = styled.a`
  margin-left: 44px;
  padding: 5px 20px;
  font-family: ${({ theme }) => theme.fonts.lexendDeca};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textWhite};
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  border-radius: 30px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: background-color 0.4s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`
