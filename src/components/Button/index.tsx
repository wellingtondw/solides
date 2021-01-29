import React, { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <S.Button {...rest}>{children}</S.Button>;
};

export default Button;
