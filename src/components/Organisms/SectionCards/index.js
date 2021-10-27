import { StyledSectionCards, StyledCardsContainer } from './style'
import Card from '../../Molecules/Card'
import Typography from '../../Atoms/Typography'

const SectionCards = ({ 
  sectionTitle,
  columns,
  cardTitle, 
  imageUrl, 
  category, 
  href = '#',
  ...props 
}) => {
  return (
    <StyledSectionCards>
      {sectionTitle && 
        <Typography tag='h2' variant="sectionCardsTitle">{sectionTitle}</Typography>
      }
      <StyledCardsContainer columns={columns}>
        <Card
          title={cardTitle}
          imageUrl={imageUrl}
          category={category}
          href={href}
        />
        <Card
          title={cardTitle}
          imageUrl={imageUrl}
          category={category}
          href={href}
        />
        <Card
          title={cardTitle}
          imageUrl={imageUrl}
          category={category}
          href={href}
        />
        <Card
          title={cardTitle}
          imageUrl={imageUrl}
          category={category}
          href={href}
        />
        <Card
          title={cardTitle}
          imageUrl={imageUrl}
          category={category}
          href={href}
        />
        <Card
          title={cardTitle}
          imageUrl={imageUrl}
          category={category}
          href={href}
        />
      </StyledCardsContainer>
    </StyledSectionCards>
  )
}

export default SectionCards
