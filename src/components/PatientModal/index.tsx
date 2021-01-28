import React from 'react';
import { FaUser } from 'react-icons/fa';
import * as S from './styles';

import ModalBase, { ModalBaseProps } from '../ModalBase';
import PatientInfo from '../PatientInfo';

export type PatientModalProps = ModalBaseProps;

const PatientModal: React.FC<PatientModalProps> = ({
  showModal = false,
  handleCloseModal,
  ...rest
}) => {
  return (
    <ModalBase
      showModal={showModal}
      handleCloseModal={handleCloseModal}
      {...rest}
    >
      <S.Container>
        <S.UserIconContainer>
          <FaUser size={40} color="#fff" />
        </S.UserIconContainer>
        <S.LeftContainer>
          <S.Wrapper>
            <PatientInfo label="ID" text="123456" />
            <PatientInfo label="Name" text="Wellington de Lima Silva" />
            <S.Divisor />
            <PatientInfo label="Telefone" text="9999-9999" />
            <PatientInfo label="Email" text="wellington@hotmail.com" />
          </S.Wrapper>
        </S.LeftContainer>
        <S.RightContainer>
          <S.Wrapper>
            <PatientInfo label="Gênero" text="Masculino" />
            <PatientInfo label="Data de nascimento" text="11/04/1990" />
            <S.Divisor style={{ borderColor: '#fff' }} />
            <PatientInfo label="Endereço" text="Avenida São José, 4003" />
            <PatientInfo label="Nacionalidade" text="Brasileiro" />
          </S.Wrapper>
        </S.RightContainer>
      </S.Container>
    </ModalBase>
  );
};

export default PatientModal;
