import React, { useEffect, useState, useCallback } from 'react';
import Table from '../Table';

import { Results, useUser } from '../../hooks/user';

import Button from '../Button';
import PatientModal from '../PatientModal';
import formattedDateFn from '../../utils/formattedDate';
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

const defaultCurrentData = {
  email: '',
  gender: '',
  id: {
    value: '',
  },
  location: {
    city: '',
    country: '',
    postcode: '',
    state: '',
  },
  name: {
    first: '',
    last: '',
  },
  nat: '',
  phone: '',
  picture: {
    large: '',
  },
  registered: {
    age: '',
    date: '',
  },
};

const UserTable: React.FC = () => {
  const [data, setData] = useState<tableDataProps[][]>([]);
  const [currentData, setCurrentData] = useState<Results>(defaultCurrentData);
  const [showModal, setShowModal] = useState(false);

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

  const handlePatientModal = useCallback(result => {
    setShowModal(true);
    setCurrentData(result);
  }, []);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
    setCurrentData(defaultCurrentData);
  }, []);

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
        { value: formattedDateFn(result.registered.date) },
        {
          value: (
            <S.ActionsContainer>
              <Button onClick={() => handlePatientModal(result)}>
                Visualizar
              </Button>
            </S.ActionsContainer>
          ),
        },
      ];
    });

    setData(formatTableData);
  }, [results]);

  useEffect(() => {
    handleGetUserInfo({
      inc: 'email,gender,id,location,name,nat,phone,picture,registered',
    });
  }, [handleGetUserInfo]);

  useEffect(() => {
    handleFormatTableData();
  }, [handleFormatTableData]);

  return (
    <>
      <PatientModal
        showModal={showModal}
        data={currentData}
        handleCloseModal={handleCloseModal}
      />
      {data.length < 1 && !loading ? (
        <S.Info>Nenhum resultado encontrado</S.Info>
      ) : (
        <Table headers={headers} data={data} />
      )}
    </>
  );
};

export default UserTable;
