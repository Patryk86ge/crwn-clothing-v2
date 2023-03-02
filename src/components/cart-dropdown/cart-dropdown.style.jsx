import styled from 'styled-components';
// import Button from '../button/button.component'
import {BaseBtn, GoogleSignInBtn, InvertedSignInBtn} from '../button/button.style';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex; 
  flex-direction: column;
  padding: 10px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  cursor: pointer;
  
  ${BaseBtn},
  ${GoogleSignInBtn},
  ${InvertedSignInBtn}{
    margin-top: auto;
  }
`
export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

