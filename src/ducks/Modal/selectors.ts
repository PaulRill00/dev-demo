import { createSelector } from '@reduxjs/toolkit';
import { AppState } from 'ducks';

import { MODALS_STATE_KEY } from '.';

const getModalsSelector = (state: AppState) => state[MODALS_STATE_KEY];
const getModalByName = (state: AppState, name: string) => state[MODALS_STATE_KEY].status[name];

export const modalsCanOpen = createSelector(getModalByName, modal => !modal);
export const modalsCanClose = createSelector(getModalByName, modal => modal === true);
export const getOpenModals = createSelector(getModalsSelector, modals => Object.keys(modals.status).filter(modalName => modals.status[modalName]));
export const isModalActive = createSelector(getModalByName, modal => modal || false);
export const getModalPayload = createSelector(
    [(_state: AppState, modalName: string) => modalName, getModalsSelector],
    (modalName, modals) => modals.payload[modalName] || {}
);
