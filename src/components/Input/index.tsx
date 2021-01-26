import React, { InputHTMLAttributes } from 'react';
import { IoSearchOutline } from 'react-icons/io5';

import * as S from './styles';

export type InputProps = {
  handleSearch?: () => void;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ handleSearch, style, ...rest }) => {
  return (
    <S.Container style={style}>
      <S.Input {...rest} />
      {!!handleSearch && (
        <S.Search onClick={handleSearch}>
          <IoSearchOutline color="#bbb" size={24} />
        </S.Search>
      )}
    </S.Container>
  );
};

export default Input;
