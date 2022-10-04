import { IUser } from '@dmgincs/utils';
import { PayloadAction } from '@reduxjs/toolkit';

export type ReduxAuthUser = IUser & { authToken: string|undefined };

export type AuthState = {
    readonly authUser: ReduxAuthUser|null;
};

export type AuthSetUserActionPayload = PayloadAction<ReduxAuthUser|null>;
