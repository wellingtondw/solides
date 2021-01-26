import React from 'react';
import * as S from './styles';

import ModalBase, { ModalBaseProps } from '../ModalBase';

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
      <S.Container>asdasda</S.Container>
    </ModalBase>
  );
};

export default PatientModal;
