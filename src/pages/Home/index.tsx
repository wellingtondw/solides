import React from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Table from '../../components/Table';

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
      </MainContainer>
    </>
  );
};

export default Home;
