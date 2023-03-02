import React from 'react';
import {BaseBtn, GoogleSignInBtn, InvertedSignInBtn} from "./button.style";

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google:'google-sign-in',
  inverted:'inverted',

}
const getBtn = (buttonType = BUTTON_TYPE_CLASSES.base) => (
  {
    [BUTTON_TYPE_CLASSES.base]:BaseBtn ,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInBtn,
    [BUTTON_TYPE_CLASSES.inverted]:InvertedSignInBtn,
  }[buttonType]
)
const Button = ({ children, buttonType ,...otherProps}) => {
  const CustomBtn = getBtn(buttonType)
  return (
    <CustomBtn
      {...otherProps}
    >
      {children}
    </CustomBtn>
  );
};

export default Button;