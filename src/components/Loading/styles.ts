import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    animation: ${spinAnimation} 0.7s linear infinite;
  }
`;

export const Text = styled.p`
  margin-left: 8px;
`;
