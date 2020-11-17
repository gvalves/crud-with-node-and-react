import { MenuActionTypes, MenuState, TOGGLE_MENU } from './types';

const INITIAL_STATE: MenuState = {
  isMenuVisible: false,
};

export function menuReducer(
  state = INITIAL_STATE,
  action: MenuActionTypes
): MenuState {
  switch (action.type) {
    case TOGGLE_MENU:
      return { isMenuVisible: !state.isMenuVisible };

    default:
      return state;
  }
}
