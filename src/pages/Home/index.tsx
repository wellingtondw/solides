import React, { useCallback, useEffect, useState } from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Loading from '../../components/Loading';
import PatientModal, { ModalDataProps } from '../../components/PatientModal';
import UserTable from '../../components/UserTable';

import { MainContainer } from '../../styles/common';

import * as S from './styles';

const PER_PAGE = 50;

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [page, setPage] = useState(1);
  // const [results, setResults] = useState([]);
  // const [modalData, setModalData] = useState<ModalDataProps>({
  //   address: '',
  //   birthDate: '',
  //   email: '',
  //   gender: '',
  //   id: '',
  //   image: '',
  //   name: '',
  //   nationality: '',
  //   tel: '',
  // });

  // const handleShowModal = useCallback(result => {
  //   setShowModal(true);

  //   console.log('Result', result);

  //   setModalData({
  //     image: result.picture.large,
  //     address: `${result.location.street.name}, ${result.location.street.number}`,
  //     birthDate: 'asd',
  //     email: result.email,
  //     gender: result.gender,
  //     id: result.login.uuid,
  //     name: `${result.name.first} ${result.name.last}`,
  //     nationality: 'asda',
  //     tel: 'asda',
  //   });
  // }, []);

  // const handleScroll = useCallback(() => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop <
  //       document.documentElement.offsetHeight ||
  //     loading ||
  //     results.length < 50
  //   ) {
  //     return;
  //   }

  //   setPage(page + 1);
  // }, [page, setPage, loading]);

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [handleScroll]);

  return (
    <S.Container>
      <PatientModal
        showModal={showModal}
        handleCloseModal={() => setShowModal(false)}
        address="modalData.address"
        birthDate="modalData.birthDate"
        email="modalData.email"
        gender="modalData.gender"
        id="modalData.id"
        image="modalData.image"
        name="modalData.name"
        nationality="modalData.nationality"
        tel="modalData.tel"
      />
      <Header />
      <MainContainer>
        <Input
          placeholder="Pesquisar..."
          handleSearch={() => setShowModal(true)}
        />
        <UserTable />
        {loading && <Loading />}
      </MainContainer>
    </S.Container>
  );
};

export default Home;
