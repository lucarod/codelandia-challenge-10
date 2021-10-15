import styled from "styled-components";

export const StyledPageTitle = styled.div`
  width: ${({ maxWidth }) => maxWidth ? maxWidth : '100%'};
  margin-right: auto;
  margin-top: 117px;
  
  & > h1 {
    margin-bottom: 12px;
  }
`