import React from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Table from '../../components/Table';
import Loading from '../../components/Loading';

import { MainContainer } from '../../styles/common';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Input
          placeholder="Pesquisar..."
          handleSearch={() => console.log('Ok')}
        />
        <Table />
        <Loading />
      </MainContainer>
    </>
  );
};

export default Home;
