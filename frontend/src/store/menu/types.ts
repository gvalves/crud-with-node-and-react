export const TOGGLE_MENU = 'TOGGLE_MENU';

export interface MenuState {
  isMenuVisible: boolean;
}

export interface ToggleMenuAction {
  type: typeof TOGGLE_MENU;
}

export type MenuActionTypes = ToggleMenuAction;
