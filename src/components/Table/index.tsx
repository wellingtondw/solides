import React from 'react';

import * as S from './styles';

export type TableProps = {
  headers: {
    text: string;
  }[];
  data: {
    value: string | React.Component;
  }[][];
};

const Table: React.FC<TableProps> = ({ headers, data, ...rest }) => {
  return (
    <S.Table {...rest}>
      <S.Head>
        <S.Row>
          {headers.map(header => (
            <S.TableHead>{header.text}</S.TableHead>
          ))}
        </S.Row>
      </S.Head>
      <S.Body>
        {data.map(row => {
          return (
            <S.Row>
              {row.map(cell => (
                <S.TableData>{cell.value}</S.TableData>
              ))}
            </S.Row>
          );
        })}
      </S.Body>
    </S.Table>
  );
};

export default Table;
