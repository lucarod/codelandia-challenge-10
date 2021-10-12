import styled from "styled-components";

export const StyledPageTitle = styled.div`
  width: ${({ maxWidth }) => maxWidth ? maxWidth : '100%'};
  margin-right: auto;
  margin-top: 117px;
  
  & > h1 {
    font-family: ${({ theme }) => theme.fonts.lexendDeca};
    font-weight: 400;
    font-size: 48px;
    line-height: 60px;
    color: ${({ theme }) => theme.colors.textWhite};
    margin-bottom: 12px;
  }

  & > h2 {
    font-family: ${({ theme }) => theme.fonts.inter};
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    color: ${({ theme }) => theme.colors.textGrey};
  }
`