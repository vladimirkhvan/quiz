import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {TAnswer} from './types';

interface AnswersState {
    answers: {};
    completingStatus: 'completed' | 'processing';
}

const initialState: AnswersState = {
    answers: {},
    completingStatus: 'processing',
};

export const answersSlice = createSlice({
    name: 'answers',
    initialState,
    reducers: {
        setAnswer(state, action: PayloadAction<TAnswer>){
            state.answers[action.payload.question] = action.payload.answer;
        },
        clearAnswers(state){
            state.answers = {};
            state.completingStatus = 'processing';
        },
        completeQuiz(state){
            state.completingStatus = 'completed';
        },
    },
});

export const { setAnswer, clearAnswers, completeQuiz } = answersSlice.actions;
export default answersSlice.reducer;
