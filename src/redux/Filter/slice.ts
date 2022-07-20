import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCategory, TDifficulty, TType } from './types';

interface FilterState {
    category: TCategory;
    difficulty: TDifficulty;
    type: TType;
    numberOfQuestions: number;
}

const initialState: FilterState = {
    category: 'random',
    difficulty: 'easy',
    type: 'boolean',
    numberOfQuestions: 5,
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategory(state, action: PayloadAction<TCategory>) {
            state.category = action.payload;
        },
        setDifficulty(state, action: PayloadAction<TDifficulty>) {
            state.difficulty = action.payload;
        },
        setType(state, action: PayloadAction<TType>) {
            state.type = action.payload;
        },
        setNumberOfQuestions(state, action: PayloadAction<number>) {
            state.numberOfQuestions = action.payload;
        },
    },
});

export const { setCategory, setDifficulty, setType, setNumberOfQuestions } = filterSlice.actions;
export default filterSlice.reducer;
