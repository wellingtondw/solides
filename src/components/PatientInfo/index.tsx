import React from 'react';
import * as S from './styles';

export type PatientInfoProps = {
  label: string;
  text: string;
};

const PatientInfo: React.FC<PatientInfoProps> = ({ label, text, ...rest }) => {
  return (
    <S.Container {...rest}>
      <S.Label>{`${label}:`}</S.Label>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
};

export default PatientInfo;
