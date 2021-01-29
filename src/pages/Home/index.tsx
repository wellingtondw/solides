import React, { useState } from 'react';
import { useUser } from '../../hooks/user';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Loading from '../../components/Loading';
import PatientModal from '../../components/PatientModal';
import UserTable from '../../components/UserTable';

import { MainContainer } from '../../styles/common';

import * as S from './styles';

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const { loading } = useUser();
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
