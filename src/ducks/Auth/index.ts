import { createSlice } from '@reduxjs/toolkit';
import { AuthSetUserActionPayload, AuthState } from './types';
import { HYDRATE } from 'next-redux-wrapper';

export const AUTH_STATE_KEY = 'auth';

export const AUTH_INITIAL_STATE: AuthState = {
    authUser: null
};

const authSlice = createSlice({
    name: AUTH_STATE_KEY,
    initialState: AUTH_INITIAL_STATE,
    reducers: {
        setAuthUser: (state, { payload }: AuthSetUserActionPayload) => {
            state.authUser = payload;
        }
    },

    extraReducers: {
        [HYDRATE]: (_state, { payload }) => {
            return payload[AUTH_STATE_KEY];
        }
    }
});

export const { name, actions, reducer } = authSlice;
export const {
    setAuthUser: authSetUserAction
} = actions;
export default authSlice;
