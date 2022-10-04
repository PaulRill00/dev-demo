import { createSlice } from '@reduxjs/toolkit';
import { GlobalErrorSetAxiosErrorActionPayload, GlobalErrorSetConfirmActionPayload, GlobalErrorSetErrorActionPayload, GlobalErrorSetInfoActionPayload, GlobalErrorState as GlobalModalState } from './types';

export const GLOBAL_MODAL_STATE_KEY = 'globalModal';

export const GLOBAL_MODAL_INITIAL_STATE: GlobalModalState = {
    confirm: null,
    error: null,
    info: null
};

const globalErrorSlice = createSlice({
    name: GLOBAL_MODAL_STATE_KEY,
    initialState: GLOBAL_MODAL_INITIAL_STATE,
    reducers: {
        setGlobalError: (state, { payload }: GlobalErrorSetErrorActionPayload) => {
            state.error = payload;
        },
        setGlobalAxiosError: (state, { payload }: GlobalErrorSetAxiosErrorActionPayload) => {
            state.error = {
                error: payload.response?.data.title
                    ?? (typeof payload.response?.data.message === 'object'
                        ? payload.response?.data.message.join(', ')
                        : payload.response?.data.message)
                    ?? payload.message,
                errorCode: payload.response?.data.error_code ?? payload.response?.status
            };
        },
        setGlobalConfirm: (state, { payload }: GlobalErrorSetConfirmActionPayload) => {
            state.confirm = payload;
        },
        setGlobalInfo: (state, { payload }: GlobalErrorSetInfoActionPayload) => {
            state.info = payload;
        },
        reset: () => {
            return GLOBAL_MODAL_INITIAL_STATE;
        }
    }
});

export const { name, actions, reducer } = globalErrorSlice;
export const {
    setGlobalError: globalSetErrorAction,
    setGlobalAxiosError: globalSetAxiosErrorAction,
    setGlobalConfirm: globalSetConfirmAction,
    setGlobalInfo: globalSetInfoAction,
    reset: globalResetAction
} = actions;
export default globalErrorSlice;

