import React, { useState } from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Table from '../../components/Table';
import Loading from '../../components/Loading';
import PatientModal from '../../components/PatientModal';

import { MainContainer } from '../../styles/common';

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(true);

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
        <Table />
        <Loading />
      </MainContainer>
    </>
  );
};

export default Home;
