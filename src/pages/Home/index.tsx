import React, { useCallback, useEffect, useState } from 'react';

import { table } from 'console';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Table from '../../components/Table';
import Loading from '../../components/Loading';
import PatientModal from '../../components/PatientModal';

import { MainContainer } from '../../styles/common';
import api from '../../services/api';

import * as S from './styles';

export type tableResultProps = {
  name: { first: string; last: string };
  gender: string;
  registered: { date: string };
};

export type tableDataProps = {
  value: string | React.Component;
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

const PER_PAGE = 50;

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);
  const [tableData, setTableData] = useState<tableDataProps[][]>([]);

  const handleGetData = useCallback(async () => {
    setLoading(true);
    const { data } = await api.get(`?page=${page}&results=${PER_PAGE}`);

    const tableFormatData = data.results.map((result: tableResultProps) => {
      return [
        { value: `${result.name.first} ${result.name.last}` },
        { value: result.gender },
        { value: result.registered.date },
      ];
    });
    const newArrTable = [...tableData, ...tableFormatData];

    setResults(data.results);
    setTableData(newArrTable);
    setLoading(false);
  }, [page]);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop <
        document.documentElement.offsetHeight ||
      loading ||
      results.length < 50
    ) {
      return;
    }

    setPage(page + 1);
  }, [page, setPage, loading]);

  useEffect(() => {
    handleGetData();
  }, [handleGetData, page]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <S.Container>
      <PatientModal
        showModal={showModal}
        handleCloseModal={() => setShowModal(false)}
      />
      <Header />
      <MainContainer>
        <Input
          placeholder="Pesquisar..."
          handleSearch={() => setShowModal(true)}
        />
        <Table headers={headers} data={tableData} />
        {loading && <Loading />}
      </MainContainer>
    </S.Container>
  );
};

export default Home;
