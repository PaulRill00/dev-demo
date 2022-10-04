// Vendor
import type { Dictionary, PayloadAction } from '@reduxjs/toolkit';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ModalPayload {}

export interface ModalsState {
    readonly status: Dictionary<boolean>;
    readonly payload: Dictionary<ModalPayload>;
}

export type ModalsOpenActionPayload = PayloadAction<{
    name: string;
    payload?: ModalPayload;
}>;

export type ModalsCloseActionPayload = PayloadAction<{
    name: string;
}>;
