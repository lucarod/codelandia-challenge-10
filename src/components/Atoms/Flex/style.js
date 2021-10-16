import styled from 'styled-components';

export const StyledFlex = styled.div`
  display: flex;
  align-items: ${({ align }) => align ? align : 'flex-start'};
  justify-content: ${({ justify }) => justify ? justify : 'flex-start'};
`