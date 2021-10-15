import styled, { css } from 'styled-components';

import { variantStyles } from './index'

export const StyledCard = styled.article`
  position: relative;
  cursor: pointer;
  ${({ variant }) => variantStyles[variant].style};

  & > .card__gradient {
    position: absolute;
    inset: 0;
    width: 100%;
    background-image: linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%);
  }

  & img {
    transition: transform 0.25s ease;
  }

  &:hover img {
    transform: scale(1.25);
  }

  & > a,
  & > h3 {
    position: absolute;
  }

  & > a {
    top: 10px;
    left: 10px;
  }

  & > h3 {
    bottom: 10px;
    left: 15px;
    right: 20px;

    font-size: 13px;
    line-height: 20px;
    font-weight: 400;
    font-family: ${({ theme }) => theme.fonts.lexendDeca};
    color: ${({ theme }) => theme.colors.textWhite};
  }

`