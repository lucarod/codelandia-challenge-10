import { StyledHighlights } from './style'
import Card from '../../Molecules/Card'

const Highlights = ({ title, imageUrl, category, href = '#', ...props }) => {
  return (
    <StyledHighlights>
      <Card
        variant='highlightCard__big'
        title={title}
        imageUrl={imageUrl}
        category={category}
        href={href}
      />
      <div>
        <Card
          variant='highlightCard__small'
          title={title}
          imageUrl={imageUrl}
          category={category}
          href={href}
        />
        <Card
          variant='highlightCard__small'
          title={title}
          imageUrl={imageUrl}
          category={category}
          href={href}
        />
      </div>
    </StyledHighlights>
  )
}

export default Highlights
