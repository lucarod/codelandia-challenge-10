import Image from 'next/image'
import NextLink from 'next/link'

import Link from '../../Atoms/Link'
import Typography from '../../Atoms/Typography'


import { css } from 'styled-components'
import { StyledCard } from './style'

export const variantStyles = {
  defaultCard: {
    style: css`
      width: 338px;
      height: 250px;
    `,
    linkVariant: 'defaultCardTag'
  },
  highlightCard__small: {
    style: css`
      width: 338px;
      height: 165px;
    `,
    linkVariant: 'defaultCardTag'
  },
  highlightCard__big: {
    style: css`
      width: 761px;
      height: 350px;
    `,
    fontStyle: css`
      font-family: ${({ theme }) => theme.fonts.lexendDeca};
      font-size: 24px;
      line-height: 34px;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.textWhite};
      inset: auto 30px 15px 30px;
    `,
    linkVariant: 'highlightCardTag'
  }
}

const Card = ({ variant = 'defaultCard', title, imageUrl, category, href, ...props }) => {
  const variantStyle = variantStyles[variant]
  const typographyVariant = variant == 'highlightCard__big' ? 'default' : 'smallTitle'

  return (
    <NextLink href={href}>
      <StyledCard variant={variant}>
        <Image
          src={`/images/${imageUrl}`}
          alt={title}
          layout='fill'
          objectFit='cover'
        />
        <div className="card__gradient"></div>
        <Link href='#categoria' name={category} variant={variantStyle.linkVariant} />
        <Typography tag='h3' variant={typographyVariant}>{title}</Typography>
      </StyledCard>
    </NextLink>
  )
}

export default Card
