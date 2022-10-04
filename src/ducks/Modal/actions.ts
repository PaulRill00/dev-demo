// Vendor
import type { Dispatch } from '@reduxjs/toolkit';

// Typings
import type { ModalPayload } from './types';
import type { GetState } from 'typings/Redux';

// Redux
import { modalsCanClose, modalsCanOpen, getOpenModals } from './selectors';
import { modalsOpenAction, modalsCloseAction, modalsCloseAllAction } from '.';

export const openModal = (name: string, payload: ModalPayload = {}) => {
    return async (dispatch: Dispatch, getState: GetState): Promise<void> => {
        const state = getState();
        if (modalsCanOpen(state, name)) {
            dispatch(modalsOpenAction({ name, payload }));

        }
    };
};

export const closeModal = (name: string) => {
    return (dispatch: Dispatch, getState: GetState): void => {
        const state = getState();
        if (modalsCanClose(state, name)) {
            dispatch(modalsCloseAction({ name }));
        }
    };
};

export const closeAllModals = () => {
    return (dispatch: Dispatch, getState: GetState) => {
        const state = getState();
        const openModals = getOpenModals(state);
        if (openModals.length) {
            dispatch(modalsCloseAllAction());
        }
    };
};
