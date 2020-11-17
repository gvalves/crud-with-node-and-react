import {
  CrudActionTypes,
  CrudState,
  HIDE_FORM,
  SET_PORTFOLIO_TO_UPDATE,
  SHOW_FORM,
} from './types';

const INITIAL_STATE: CrudState = {
  isFormShowing: false,
  portfolioToUpdate: null,
  registerType: 'INSERT',
};

export function crudReducer(
  state = INITIAL_STATE,
  action: CrudActionTypes
): CrudState {
  switch (action.type) {
    case SHOW_FORM:
      return { ...state, isFormShowing: true };

    case HIDE_FORM:
      return { ...state, isFormShowing: false };

    case SET_PORTFOLIO_TO_UPDATE:
      return { ...state, portfolioToUpdate: action.portfolio };

    default:
      return state;
  }
}
