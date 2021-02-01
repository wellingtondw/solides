import React from 'react';
import { FaUser } from 'react-icons/fa';
import * as S from './styles';

import ModalBase, { ModalBaseProps } from '../ModalBase';
import PatientInfo from '../PatientInfo';
import { Results } from '../../hooks/user';

export type PatientModalProps = {
  data: Results;
} & ModalBaseProps;

const PatientModal: React.FC<PatientModalProps> = ({
  showModal = false,
  handleCloseModal,
  data,
  ...rest
}) => {
  const formattedName = `${data.name.first} ${data.name.last}`;
  const formattedDate = new Date(data.registered.date).toLocaleDateString(
    'en-US',
  );

  return (
    <ModalBase
      showModal={showModal}
      handleCloseModal={handleCloseModal}
      {...rest}
    >
      <S.Container>
        <S.ImageContainer>
          {data.picture.large ? (
            <S.Image src={data.picture.large} />
          ) : (
            <FaUser size={40} color="#fff" />
          )}
        </S.ImageContainer>
        <S.LeftContainer>
          <S.Wrapper>
            <PatientInfo label="ID" text={data.id.value} />
            <PatientInfo label="Name" text={formattedName} />
            <S.Divisor />
            <PatientInfo label="Phone" text={data.phone} />
            <PatientInfo label="Email" text={data.email} />
          </S.Wrapper>
        </S.LeftContainer>
        <S.RightContainer>
          <S.Wrapper>
            <PatientInfo label="Gender" text={data.gender} />
            <PatientInfo label="Birth Date" text={formattedDate} />
            <S.Divisor style={{ borderColor: '#fff' }} />
            <PatientInfo label="Location" text={data.location.city} />
            <PatientInfo label="Nationality" text={data.nat} />
          </S.Wrapper>
        </S.RightContainer>
      </S.Container>
    </ModalBase>
  );
};

export default PatientModal;
