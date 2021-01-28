import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  border-radius: 4px;
  border: 1px solid #beb5d1;
  text-align: center;
  padding: 8px 16px;
`;

export const Label = styled.p`
  margin-right: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 27px;
  color: #222;
`;

export const Text = styled(Label)`
  font-weight: 400;
  margin: 0;
`;
