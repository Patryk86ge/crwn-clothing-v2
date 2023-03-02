import styled from "styled-components";
import {Link} from 'react-router-dom'

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  
  span {

  }
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`
export const LinkTitle = styled(Link)`
  font-size: 1.4rem;
  margin-bottom: 25px;
  cursor: pointer;

`




