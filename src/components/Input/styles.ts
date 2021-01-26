import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 40px 8px 16px;
  margin: 8px 0;
  border: 1px solid #ddd;
  border-radius: 4px;

  &:focus {
    border-color: #5f4a87;
  }
`;

export const Search = styled.button`
  width: 40px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  position: absolute;
  right: 0;
`;
