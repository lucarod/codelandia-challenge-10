import styled, { css } from 'styled-components';

const variantStyles = (variant) =>
({
  primary: css`
    padding: 5px 25px;
    font-size: 18px;
  `,
  smallTag: css`
    padding: 1px 14px;
    font-size: 10px;
  `,
  mediumTag: css`
    padding: 2px 16px;
    font-size: 12px;
  `,
  largeTag: css`
    padding: 4px 18px;
    font-size: 14px;
  `,
  postTag: css`
    padding: 4px 22px;
    font-size: 18px;
  `
}[variant]);

export const StyledLink = styled.a`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 3px;
  font-family: ${({ theme }) => theme.fonts.lexendDeca};
  color: ${({ theme }) => theme.colors.textWhite};
  transition: all 0.3s;
  cursor: pointer;
  text-decoration: none;
  ${({ variant }) => variantStyles(variant)}

`;