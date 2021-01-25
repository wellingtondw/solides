import React from 'react';

import * as S from './styles';

import { MainContainer } from '../../styles/common';

const Header = () => {
  return (
    <S.Container>
      <MainContainer>
        <S.Logo>Pharma Inc</S.Logo>
      </MainContainer>
    </S.Container>
  );
};

export default Header;
