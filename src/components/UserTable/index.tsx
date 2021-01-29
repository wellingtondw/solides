import React, { useEffect, useState, useCallback } from 'react';
import Table from '../Table';

import { useUser } from '../../hooks/user';

import Button from '../Button';
import * as S from './styles';

export type tableDataProps = {
  value: string | React.ReactNode;
};

const headers = [
  {
    text: 'Name',
  },
  {
    text: 'Gender',
  },
  {
    text: 'Birth',
  },
  {
    text: 'Actions',
  },
];

const UserTable: React.FC = () => {
  const [data, setData] = useState<tableDataProps[][]>([]);
  const { handleGetUserInfo, results } = useUser();

  const handleFormatTableData = useCallback(() => {
    const formatTableData = results.map(result => {
      return [
        { value: `${result.name.first} ${result.name.last}` },
        { value: result.gender },
        { value: result.registered.date },
        {
          value: (
            <S.ActionsContainer>
              <Button onClick={() => console.log('Ok')}>Visualizar</Button>
            </S.ActionsContainer>
          ),
        },
      ];
    });

    const newArrTable = [...data, ...formatTableData];

    setData(newArrTable);
  }, [results]);

  useEffect(() => {
    handleGetUserInfo({
      page: 1,
      perPage: 50,
    });
  }, [handleGetUserInfo]);

  useEffect(() => {
    handleFormatTableData();
  }, [handleFormatTableData]);

  return <Table headers={headers} data={data} />;
};

export default UserTable;
