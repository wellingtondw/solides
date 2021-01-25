import React from 'react';

import * as S from './styles';

const Table: React.FC = () => {
  return (
    <S.Table>
      <S.Head>
        <S.Row>
          <S.TableHead>Header content 1</S.TableHead>
          <S.TableHead>Header content 2</S.TableHead>
          <S.TableHead>Header content 3</S.TableHead>
        </S.Row>
      </S.Head>
      <S.Body>
        <S.Row>
          <S.TableData>Body content 1</S.TableData>
          <S.TableData>Body content 2</S.TableData>
          <S.TableData>Body content 3</S.TableData>
        </S.Row>
        <S.Row>
          <S.TableData>Body content 1</S.TableData>
          <S.TableData>Body content 2</S.TableData>
          <S.TableData>Body content 3</S.TableData>
        </S.Row>
        <S.Row>
          <S.TableData>Body content 1</S.TableData>
          <S.TableData>Body content 2</S.TableData>
          <S.TableData>Body content 3</S.TableData>
        </S.Row>
        <S.Row>
          <S.TableData>Body content 1</S.TableData>
          <S.TableData>Body content 2</S.TableData>
          <S.TableData>Body content 3</S.TableData>
        </S.Row>
        <S.Row>
          <S.TableData>Body content 1</S.TableData>
          <S.TableData>Body content 2</S.TableData>
          <S.TableData>Body content 3</S.TableData>
        </S.Row>
        <S.Row>
          <S.TableData>Body content 1</S.TableData>
          <S.TableData>Body content 2</S.TableData>
          <S.TableData>Body content 3</S.TableData>
        </S.Row>
      </S.Body>
    </S.Table>
  );
};

export default Table;
