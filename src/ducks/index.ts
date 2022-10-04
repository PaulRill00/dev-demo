import { combineReducers } from '@reduxjs/toolkit';
import { AUTH_STATE_KEY, reducer as authReducer } from './Auth';
import { GLOBAL_MODAL_STATE_KEY, reducer as globalModalReducer } from './GlobalModal';
import { MODALS_STATE_KEY, reducer as modalsReducer } from './Modal';

const Reducers = combineReducers({
    [AUTH_STATE_KEY]: authReducer,
    [GLOBAL_MODAL_STATE_KEY]: globalModalReducer,
    [MODALS_STATE_KEY]: modalsReducer,
});

export type AppState = ReturnType<typeof Reducers>;

export default Reducers;
