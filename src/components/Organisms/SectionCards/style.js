import styled from 'styled-components'

export const StyledSectionCards = styled.section`

`

export const StyledCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  row-gap: ${({columns}) => columns == 1 ? '47px' : '42px' };
  column-gap: 52px;
  margin-top: ${({columns}) => columns == 1 ? '14px' : '39px' };
  margin-bottom: ${({columns}) => columns == 1 ? '0' : '95px'};
`
