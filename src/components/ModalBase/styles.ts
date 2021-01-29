import styled, { css } from 'styled-components';

type ModalProps = {
  showModal: boolean;
};

export const Overlay = styled.div<ModalProps>`
  ${({ showModal }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 9;
    transition: opacity 0.4s ease-in;
    opacity: ${showModal ? 1 : 0};
    visibility: ${showModal ? 'auto' : 'hidden'};
  `}
`;

export const Container = styled.div`
  background: #fff;
  width: 100%;
  max-width: 768px;
  height: 70vh;
  border-radius: 4px;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 8px;
  top: 8px;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
