// Vendor
import { createSlice } from '@reduxjs/toolkit';

// Typings
import type { ModalsCloseActionPayload, ModalsOpenActionPayload, ModalsState } from './types';

export const MODALS_STATE_KEY = 'modals';

export const MODALS_INITIAL_STATE: ModalsState = {
    status: {},
    payload: {}
};

const modalsSlice = createSlice({
    name: MODALS_STATE_KEY,
    initialState: MODALS_INITIAL_STATE,
    reducers: {
        open: (state, { payload }: ModalsOpenActionPayload) => {
            state.payload[payload.name] = payload.payload || {};
            state.status[payload.name] = true;
        },
        close: (state, { payload }: ModalsCloseActionPayload) => {
            delete state.status[payload.name];
            if (Object.prototype.hasOwnProperty.call(state.payload, payload.name)) {
                delete state.payload[payload.name];
            }
        },
        closeAll() {
            return MODALS_INITIAL_STATE;
        }
    }
});

export const { name, actions, reducer } = modalsSlice;
export const {
    open: modalsOpenAction,
    close: modalsCloseAction,
    closeAll: modalsCloseAllAction
} = actions;
export default modalsSlice;

