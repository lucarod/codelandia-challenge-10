import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > p {
    max-width: 500px;
    margin-top: 16px;
    font-family: ${({ theme }) => theme.fonts.inter};
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.textGrey};
    text-align: center;
  }
`