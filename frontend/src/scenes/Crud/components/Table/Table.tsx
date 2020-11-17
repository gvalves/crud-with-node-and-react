import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { setPortfolioToUpdate, showForm } from '../../../../store/crud/actions';

import { PortfolioApi } from '../../../../services/api';
import { Portfolio } from '../../../../services/api/types';

import { Container } from './styles';
import { Button } from '../../../../components/Button';

const CrudPageTable: React.FC = () => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const isFormShowing = useSelector(
    (state: RootState) => state.crudReducer.isFormShowing
  );
  const dispatch = useDispatch();

  const asyncSetPortfolios = async () => {
    const newPortfolios = await PortfolioApi.getAllPortfolios();
    setPortfolios(newPortfolios);
  };

  useEffect(() => {
    asyncSetPortfolios();
    return () => setPortfolios([]);
  }, []);

  useEffect(() => {
    asyncSetPortfolios();
    return () => setPortfolios([]);
  }, [isFormShowing]);

  const handleUpdate = async (portfolio: Portfolio) => {
    dispatch(setPortfolioToUpdate(portfolio));
    dispatch(showForm());
  };

  const handleDelete = async (id: number) => {
    await PortfolioApi.deletePortfolio(id);
    setPortfolios(portfolios.filter((portfolio) => portfolio.id !== id));
  };

  const createRow = (portfolio: Portfolio) => {
    return (
      <tr key={portfolio.id}>
        <td>{portfolio.id}</td>
        <td>{portfolio.description}</td>
        <td>
          <Button className='update' onClick={() => handleUpdate(portfolio)}>
            Editar
          </Button>
        </td>
        <td>
          <Button
            className='delete theme-red'
            onClick={() => handleDelete(portfolio.id as number)}
          >
            Excluir
          </Button>
        </td>
      </tr>
    );
  };

  return (
    <Container>
      <thead>
        <tr>
          <th>Código</th>
          <th>Descrição</th>
          <th colSpan={2}>Ações</th>
        </tr>
      </thead>
      <tbody>{portfolios.map(createRow)}</tbody>
    </Container>
  );
};

export default CrudPageTable;
