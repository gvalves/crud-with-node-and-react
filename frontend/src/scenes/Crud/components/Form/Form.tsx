import React, { useEffect } from 'react';

import $ from 'jquery';

import { useForm } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { hideForm, setPortfolioToUpdate } from '../../../../store/crud/actions';

import { PortfolioApi } from '../../../../services/api';

import { Button } from '../../../../components/Button';

import { Container, Label, Input, TextArea, ButtonsWrapper } from './styles';

interface FormData {
  description: string;
  details: string;
}

const Form: React.FC = () => {
  const { register, setValue } = useForm<FormData>();
  const isFormShowing = useSelector(
    (state: RootState) => state.crudReducer.isFormShowing
  );
  const portfolioToUpdate = useSelector(
    (state: RootState) => state.crudReducer.portfolioToUpdate
  );
  const dispatch = useDispatch();

  const handleRegister = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    const id = portfolioToUpdate?.id;
    const description = $('input#description').val() as string;
    const details = $('textarea#details').val() as string;

    if (id) {
      PortfolioApi.updatePortfolio({
        id,
        description,
        details,
      });
      dispatch(setPortfolioToUpdate(null));
    } else {
      PortfolioApi.insertPortfolio({
        description,
        details,
      });
    }
    dispatch(hideForm());
  };

  const handleCancel = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (portfolioToUpdate?.id) dispatch(setPortfolioToUpdate(null));
    dispatch(hideForm());
  };

  useEffect(() => {
    if (!isFormShowing) return;
    setValue(
      'description',
      portfolioToUpdate ? portfolioToUpdate.description : ''
    );
    setValue('details', portfolioToUpdate ? portfolioToUpdate.details : '');
  }, [isFormShowing]);

  return (
    <Container
      className={!isFormShowing ? 'hide' : ''}
      method='POST'
      action='/'
    >
      <Label htmlFor='id'>Código</Label>
      <Input value={portfolioToUpdate ? portfolioToUpdate.id : ''} disabled />

      <Label htmlFor='description'>Descrição</Label>
      <Input
        id='description'
        name='description'
        placeholder='Informe a descrição'
        ref={register}
      />

      <Label htmlFor='details'>Detalhes</Label>
      <TextArea id='details' name='details' ref={register} />

      <ButtonsWrapper>
        <Button onClick={handleRegister}>Salvar</Button>
        <Button onClick={handleCancel}>Cancelar</Button>
      </ButtonsWrapper>
    </Container>
  );
};

export default Form;
