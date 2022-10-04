import { createSelector } from '@reduxjs/toolkit';
import { AppState } from 'ducks';
import { AUTH_STATE_KEY } from '.';

export const getAuthData = (state: AppState) => state[AUTH_STATE_KEY];

export const getAuthUser = createSelector(getAuthData, state => state.authUser);
