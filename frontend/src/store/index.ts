import { combineReducers } from 'redux';
import { crudReducer } from './crud/reducers';
import { menuReducer } from './menu/reducers';

export const rootReducer = combineReducers({
  crudReducer,
  menuReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
