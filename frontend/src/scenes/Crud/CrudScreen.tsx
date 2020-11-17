import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { showForm } from '../../store/crud/actions';

import { Body } from '../../components/Body';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Form } from './components/Form';
import { Table } from './components/Table';

import { Container } from './styles';
import { Button } from '../../components/Button';

const CrudScreenBody: React.FC = () => {
  const isFormShowing = useSelector(
    (state: RootState) => state.crudReducer.isFormShowing
  );
  const dispatch = useDispatch();
  const toggleForm = () => {
    dispatch(showForm());
  };

  return (
    <Container>
      <h1>Cadastro de Portfólio de Serviços</h1>

      <div className={isFormShowing ? 'hide' : ''}>
        <Button onClick={toggleForm}>Cadastrar</Button>
        <Table />
      </div>

      <Form />
    </Container>
  );
};

const CrudScreen: React.FC = () => {
  return (
    <>
      <Header />
      <Body>
        <CrudScreenBody />
      </Body>
      <Footer />
    </>
  );
};

export default CrudScreen;
