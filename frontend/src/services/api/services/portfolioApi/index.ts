import { apiUrl } from '../..';
import { ApiResponse } from '../../types';
import { Portfolio } from './types';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const insertPortfolio = async (
  portfolio: Portfolio
): Promise<ApiResponse<Portfolio>> => {
  const response = await fetch(`${apiUrl}/portfolio`, {
    headers,
    method: 'POST',
    body: JSON.stringify(portfolio),
  });

  if (response.status >= 400) throw new Error('Houve uma falha na requisição.');

  return response.json();
};

const getAllPortfolios = async (): Promise<Portfolio[]> => {
  const response = await fetch(`${apiUrl}/portfolio`);

  if (response.status >= 400) throw new Error('Houve uma falha na requisição.');

  const { data } = await response.json();

  return data;
};

const updatePortfolio = async (
  portfolio: Portfolio
): Promise<ApiResponse<Portfolio>> => {
  const response = await fetch(`${apiUrl}/portfolio`, {
    headers,
    method: 'PUT',
    body: JSON.stringify(portfolio),
  });

  if (response.status >= 400) throw new Error('Houve uma falha na requisição.');

  return response.json();
};

const deletePortfolio = async (id: number): Promise<ApiResponse<Portfolio>> => {
  const response = await fetch(`${apiUrl}/portfolio/${id}`, {
    headers,
    method: 'DELETE',
  });

  if (response.status >= 400) throw new Error('Houve uma falha na requisição.');

  return response.json();
};

export const PortfolioApi = {
  insertPortfolio,
  getAllPortfolios,
  updatePortfolio,
  deletePortfolio,
};
