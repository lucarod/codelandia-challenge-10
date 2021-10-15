import Image from 'next/image'
import NextLink from 'next/link'

import { css } from 'styled-components'

import Link from '../../Atoms/Link'

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
    linkVariant: 'highlightCardTag'
  }
}

const Card = ({ variant, title, imageUrl, category, href = '#', ...props }) => {
  const variantStyle = variantStyles[variant]

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
        <h3>{title}</h3>
      </StyledCard>
    </NextLink>
  )
}

export default Card
