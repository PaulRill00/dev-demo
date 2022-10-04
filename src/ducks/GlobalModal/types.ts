import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

type GlobalError = {
    readonly error: string|undefined;
    readonly errorCode: number|undefined;
};

type GlobalMessage = {
    readonly message: string|React.ReactNode|undefined;
};

type GlobalConfirm = {
    readonly withCancel?: boolean;
    /**
     * When provided with a promise, all modal buttons will enter a loading state when the callback is executed
     */
    readonly callback?: () => Promise<void>|void;
    readonly preventCloseOnConfirm?: boolean;
} & GlobalMessage;

export type GlobalErrorState = {
    readonly error: GlobalError|null;
    readonly confirm: GlobalConfirm|null;
    readonly info: GlobalMessage|null;
};

export type GlobalErrorSetErrorActionPayload = PayloadAction<GlobalError|null>;
export type GlobalErrorSetConfirmActionPayload = PayloadAction<GlobalConfirm|null>;
export type GlobalErrorSetInfoActionPayload = PayloadAction<GlobalMessage|null>;
export type GlobalErrorSetAxiosErrorActionPayload = PayloadAction<AxiosError>;
