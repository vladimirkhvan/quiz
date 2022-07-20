import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Status, TQuestion } from './types';

import { fetchQuestions } from './asyncActions';

interface QuestionsState {
    data: TQuestion[];
    status: Status;
}

const initialState: QuestionsState = {
    data: [],
    status: Status.PENDING,
};

export const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        setQuestions(state, action: PayloadAction<TQuestion[]>) {
            state.data = action.payload;
        },
        resetQuestions(state) {
            state.data = [];
            state.status = Status.PENDING;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchQuestions.pending, (state) => {
            state.data = [];
            state.status = Status.PENDING;
        });
        builder.addCase(fetchQuestions.fulfilled, (state, action: PayloadAction<TQuestion[]>) => {
            state.data = action.payload;
            state.status = Status.FULFILLED;
        });
        builder.addCase(fetchQuestions.rejected, (state) => {
            state.data = [];
            state.status = Status.REJECTED;
        });
    },
});

export const { setQuestions, resetQuestions } = questionsSlice.actions;
export default questionsSlice.reducer;
