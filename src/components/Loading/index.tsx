import React from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

import * as S from './styles';

const Loading: React.FC = () => {
  return (
    <S.Container>
      <AiOutlineLoading size={24} color="#5f4a87" />
      <S.Text>Carregando...</S.Text>
    </S.Container>
  );
};

export default Loading;
