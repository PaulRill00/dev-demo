import { createWrapper } from 'next-redux-wrapper';
import createStore from './createStore';

export const wrapper = createWrapper(createStore, { debug: false });
