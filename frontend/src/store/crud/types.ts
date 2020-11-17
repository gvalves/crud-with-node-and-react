import { Portfolio } from '../../services/api/types';

export const SHOW_FORM = 'SHOW_FORM';
export const HIDE_FORM = 'HIDE_FORM';
export const SET_PORTFOLIO_TO_UPDATE = 'SET_PORTFOLIO_TO_UPDATE';
export const SET_REGISTER_TYPE = 'SET_REGISTER_TYPE';

export type REGISTER_TYPE = 'INSERT' | 'UPDATE';

export interface CrudState {
  isFormShowing: boolean;
  portfolioToUpdate: Portfolio | null;
  registerType: REGISTER_TYPE;
}

export interface ShowFormAction {
  type: typeof SHOW_FORM;
}

export interface HideFormAction {
  type: typeof HIDE_FORM;
}

export interface SetPortfolioToUpdateAction {
  type: typeof SET_PORTFOLIO_TO_UPDATE;
  portfolio: Portfolio | null;
}

export type CrudActionTypes =
  | ShowFormAction
  | HideFormAction
  | SetPortfolioToUpdateAction;
