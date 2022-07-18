import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { TQuestion } from "./types";

interface Response {
    response_code: number,
    results: TQuestion[]
}

export const fetchQuestions = createAsyncThunk(
    'questions/fetchQuestions',
    async () => {
        const { data } = await axios.get<Response>(
            `https://opentdb.com/api.php?amount=5`,
        );

        return data.results as TQuestion[];
    },
);
