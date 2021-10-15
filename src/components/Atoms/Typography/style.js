import styled, { css } from 'styled-components';

const Main = styled.p`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0;
  font-family: ${({ theme }) => theme.fonts.inter};
`

export const variantStyles = {
  default: Main,
  largeTitle: styled(Main)`
    font-family: ${({ theme }) => theme.fonts.lexendDeca};
    font-weight: 400;
    font-size: 48px;
    line-height: 60px;
    color: ${({ theme }) => theme.colors.textWhite};
    margin-bottom: 12px;
  `,
  largeSubtitle: styled(Main)`
    font-family: ${({ theme }) => theme.fonts.inter};
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    color: ${({ theme }) => theme.colors.textGrey};
  `,
  smallTitle: styled(Main)`
    font-family: ${({ theme }) => theme.fonts.lexendDeca};
    font-weight: 400;
    font-size: 48px;
    line-height: 60px;
    color: ${({ theme }) => theme.colors.textWhite};
    margin-bottom: 12px;
  `,
  smallSubtitle: styled(Main)`
    font-family: ${({ theme }) => theme.fonts.inter};
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    color: ${({ theme }) => theme.colors.textGrey};
  `
};