import { configureStore } from '@reduxjs/toolkit';

import questions from './Questions/slice';
import answers from './Answers/slice';
import filter from './Filter/slice';

export const store = configureStore({
    reducer: {
        questions,
        answers,
        filter,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
