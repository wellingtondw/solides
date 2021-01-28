import React, { useCallback, useEffect, useState } from 'react';

import { table } from 'console';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Table from '../../components/Table';
import Loading from '../../components/Loading';
import PatientModal from '../../components/PatientModal';

import { MainContainer } from '../../styles/common';
import api from '../../services/api';

export type tableDataProps = {
  name: { first: string; last: string };
  gender: string;
  registered: { date: string };
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

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState({
    perPage: 50,
    page: 1,
  });
  const [results, setResults] = useState([]);
  const [tableData, setTableData] = useState([]);

  const handleGetData = useCallback(async () => {
    const { perPage } = page;
    const { data } = await api.get(`?results=${perPage}`);

    const tableFormatData = data.results.map((result: tableDataProps) => {
      return [
        { value: `${result.name.first} ${result.name.last}` },
        { value: result.gender },
        { value: result.registered.date },
      ];
    });

    setResults(data.results);
    setTableData(tableFormatData);
  }, [page]);

  useEffect(() => {
    handleGetData();
  }, [handleGetData]);

  return (
    <>
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
        <Loading />
      </MainContainer>
    </>
  );
};

export default Home;
