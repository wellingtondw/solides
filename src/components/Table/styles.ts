import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
`;

export const Head = styled.thead`
  width: 100%;
  text-align: left;
  background-color: #5f4a87;
  color: #fff;
`;

export const Row = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableHead = styled.th`
  font-weight: 500;
  padding: 12px 8px;
`;

export const Body = styled.tbody`
  tr {
    &:hover {
      background-color: #ddd;
    }
  }
`;

export const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  color: #222;
`;
