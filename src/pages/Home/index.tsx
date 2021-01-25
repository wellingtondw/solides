import React from 'react';

import Header from '../../components/Header';
import Table from '../../components/Table';

import { MainContainer } from '../../styles/common';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Table />
      </MainContainer>
    </>
  );
};

export default Home;
