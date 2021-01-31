import React from 'react';
import { useUser } from '../../hooks/user';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Loading from '../../components/Loading';
import UserTable from '../../components/UserTable';

import { MainContainer } from '../../styles/common';

import { useUserSearch } from '../../hooks/userSearch';

import * as S from './styles';

const Home: React.FC = () => {
  const { loading } = useUser();
  const { searchTerm, setSearchTerm, handleSearch } = useUserSearch();

  return (
    <S.Container>
      <Header />
      <MainContainer>
        <Input
          placeholder="Search by name, gender and nationality..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          handleSearch={handleSearch}
        />
        <UserTable />
        {loading && <Loading />}
      </MainContainer>
    </S.Container>
  );
};

export default Home;
