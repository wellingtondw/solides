import React, { useRef } from 'react';
import { IoClose } from 'react-icons/io5';
import useOnClickOutside from '../../utils/outsideClick';

import * as S from './styles';

export type ModalBaseProps = {
  showModal: boolean;
  handleCloseModal: () => void;
};

const ModalBase: React.FC<ModalBaseProps> = ({
  children,
  showModal = false,
  handleCloseModal,
  ...rest
}) => {
  const ref = useRef(null);
  useOnClickOutside(ref, handleCloseModal);

  return (
    <S.Overlay showModal={showModal} {...rest}>
      {showModal && (
        <S.Container ref={ref}>
          <S.CloseButton onClick={handleCloseModal}>
            <IoClose size={20} color="#222" />
          </S.CloseButton>
          {children}
        </S.Container>
      )}
    </S.Overlay>
  );
};

export default ModalBase;
