import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 8px 16px 8px;
`;

export const Divisor = styled.div`
  width: 80%;
  border-top: 1px solid #222;
  margin: 16px;
`;

export const LeftContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #beb5d1;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 50%;
`;

export const RightContainer = styled.div`
  width: 50%;
  background-color: rgba(95, 74, 135, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
