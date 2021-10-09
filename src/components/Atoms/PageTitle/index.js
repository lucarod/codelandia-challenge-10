import { StyledTitle, StyledSubtitle } from './style'

const PageTitle = ({ title, subtitle, ...props }) => {
  return (
    <Container>
      <StyledTitle>{title}</StyledTitle>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
    </Container>
  )
}

export default PageTitle
