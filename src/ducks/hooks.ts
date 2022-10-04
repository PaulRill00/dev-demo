import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { AppState } from '.';
import { Dispatch } from 'typings/Redux';

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useTypedDispatch: () => Dispatch = useDispatch;
