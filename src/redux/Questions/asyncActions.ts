import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TDifficulty, TType } from "../Filter/types";

import { TQuestion } from "./types";

interface Response {
    response_code: number,
    results: TQuestion[]
}
export interface FetchProps {
    category: number;
    difficulty: TDifficulty;
    type: TType;
    numberOfQuestions: number;
}

export const fetchQuestions = createAsyncThunk(
    'questions/fetchQuestions',
    async ({category, difficulty, type, numberOfQuestions}: FetchProps) => {
        const { data } = await axios.get<Response>(
            `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}&type=${type}`,
        );

        console.log(data.results)

        return data.results as TQuestion[];
    },
);
