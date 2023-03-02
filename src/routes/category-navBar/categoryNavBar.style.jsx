import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const NavigationContainer = styled.nav `
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  height: 7vh;
`;
export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LinkNav = styled(Link)`
  font-family: 'Rubik 80s Fade', cursive;
  font-size: 18px;
  margin-left: 20px;
  text-transform: uppercase;
  cursor: pointer;
`;
export const LogoContainer = styled(Link)``;