import { AppState } from 'ducks';
import { Dispatch as TDispatch } from 'redux';

export type GetState = () => AppState;

export type LoadingApiState<T> = {
    readonly state: T|null;
    readonly loading: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Dispatch = TDispatch<any>;
