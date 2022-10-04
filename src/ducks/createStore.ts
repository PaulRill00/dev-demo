import { configureStore, Store } from '@reduxjs/toolkit';
import { AppState } from '.';
import rootReducer from './';

const createStore = (): Store<AppState> => {
    return configureStore({
        reducer: rootReducer,
        devTools: process.env.ENV !== 'production'
    });
};

export default createStore;
