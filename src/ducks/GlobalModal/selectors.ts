import { AppState } from 'ducks';
import { GLOBAL_MODAL_STATE_KEY } from '.';

export const getGlobalModal = (state: AppState) => state[GLOBAL_MODAL_STATE_KEY];

