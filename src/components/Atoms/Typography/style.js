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
    font-size: 13px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.textWhite};
  `,
  smallSubtitle: styled(Main)`
    font-family: ${({ theme }) => theme.fonts.inter};
    font-weight: 400;
    font-size: 11px;
    line-height: 16px;
    color: ${({ theme }) => theme.colors.textGrey};
  `,
  sectionCardsTitle: styled(Main)`
    display: inline-block;
    font-family: ${({ theme }) => theme.fonts.lexendDeca};
    font-size: 24px;
    font-weight: 400;
    border-bottom: 3px solid;
    border-bottom-color: ${({ theme }) => theme.colors.primary};
    padding-bottom: 13px;
  `
};