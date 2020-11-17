import { MenuActionTypes, TOGGLE_MENU } from './types';

export function toggleMenu(): MenuActionTypes {
  return {
    type: TOGGLE_MENU,
  };
}
