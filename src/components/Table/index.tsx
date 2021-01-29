import React from 'react';

import * as S from './styles';

export type TableProps = {
  headers: {
    text: string;
  }[];
  data: {
    value: string | React.ReactNode;
  }[][];
};

const Table: React.FC<TableProps> = ({ headers, data, ...rest }) => {
  return (
    <S.Table {...rest}>
      <S.Head>
        <S.Row>
          {headers.map((header, index) => (
            <S.TableHead key={index}>{header.text}</S.TableHead>
          ))}
        </S.Row>
      </S.Head>
      <S.Body>
        {data.map((row, index) => {
          return (
            <S.Row key={index}>
              {row.map((cell, i) => (
                <S.TableData key={i}>{cell.value}</S.TableData>
              ))}
            </S.Row>
          );
        })}
      </S.Body>
    </S.Table>
  );
};

export default Table;
