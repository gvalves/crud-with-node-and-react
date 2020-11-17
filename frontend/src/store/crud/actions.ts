import { Portfolio } from '../../services/api/types';
import {
  CrudActionTypes,
  HIDE_FORM,
  SET_PORTFOLIO_TO_UPDATE,
  SHOW_FORM,
} from './types';

export function showForm(): CrudActionTypes {
  return {
    type: SHOW_FORM,
  };
}

export function hideForm(): CrudActionTypes {
  return {
    type: HIDE_FORM,
  };
}

export function setPortfolioToUpdate(
  portfolio: Portfolio | null
): CrudActionTypes {
  return {
    type: SET_PORTFOLIO_TO_UPDATE,
    portfolio,
  };
}
