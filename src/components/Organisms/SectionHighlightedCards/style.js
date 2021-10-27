import styled from "styled-components";

export const StyledHighlights = styled.section`
  display: flex;
  margin: 80px 0 50px;

  & > article {
    margin-right: 20px;
  }

  & > div > article:first-child {
    margin-bottom: 20px;
  }
`