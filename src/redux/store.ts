import { configureStore } from '@reduxjs/toolkit';

import questions from './Questions/slice'
import answers from './Answers/slice'

export const store = configureStore({
    reducer:{
        questions,
        answers,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;