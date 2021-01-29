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
  const {
    handleGetUserInfo,
    results,
    loading,
    page,
    setPage,
    perPage,
  } = useUser();

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop <
        document.documentElement.offsetHeight ||
      loading ||
      results.length < perPage
    ) {
      return;
    }

    setPage(page + 1);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

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

    setData(formatTableData);
  }, [results]);

  useEffect(() => {
    handleGetUserInfo();
  }, [handleGetUserInfo]);

  useEffect(() => {
    handleFormatTableData();
  }, [handleFormatTableData]);

  return (
    <>
      {data.length < 1 && !loading ? (
        <S.Info>Nenhum resultado encontrado</S.Info>
      ) : (
        <Table headers={headers} data={data} />
      )}
    </>
  );
};

export default UserTable;
