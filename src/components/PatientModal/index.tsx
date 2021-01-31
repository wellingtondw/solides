import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import * as S from './styles';

import ModalBase, { ModalBaseProps } from '../ModalBase';
import PatientInfo from '../PatientInfo';

export type ModalDataProps = {
  image: string;
  name: string;
  email: string;
  gender: string;
  birthDate: string;
  tel: string;
  nationality: string;
  address: string;
  id: string;
};

export type PatientModalProps = ModalBaseProps;

const PatientModal: React.FC<PatientModalProps> = ({
  showModal = false,
  handleCloseModal,
  ...rest
}) => {
  const [data, setData] = useState<ModalDataProps>({
    address: '',
    birthDate: '',
    email: '',
    gender: '',
    id: '',
    image: '',
    name: '',
    nationality: '',
    tel: '',
  });

  const {
    address,
    birthDate,
    email,
    gender,
    id,
    image,
    name,
    nationality,
    tel,
  } = data;
  return (
    <ModalBase
      showModal={showModal}
      handleCloseModal={handleCloseModal}
      {...rest}
    >
      <S.Container>
        <S.ImageContainer>
          {image.length ? (
            <S.Image src={image} />
          ) : (
            <FaUser size={40} color="#fff" />
          )}
        </S.ImageContainer>
        <S.LeftContainer>
          <S.Wrapper>
            <PatientInfo label="ID" text={id} />
            <PatientInfo label="Name" text={name} />
            <S.Divisor />
            <PatientInfo label="Telefone" text={tel} />
            <PatientInfo label="Email" text={email} />
          </S.Wrapper>
        </S.LeftContainer>
        <S.RightContainer>
          <S.Wrapper>
            <PatientInfo label="Gênero" text={gender} />
            <PatientInfo label="Data de nascimento" text={birthDate} />
            <S.Divisor style={{ borderColor: '#fff' }} />
            <PatientInfo label="Endereço" text={address} />
            <PatientInfo label="Nacionalidade" text={nationality} />
          </S.Wrapper>
        </S.RightContainer>
      </S.Container>
    </ModalBase>
  );
};

export default PatientModal;
