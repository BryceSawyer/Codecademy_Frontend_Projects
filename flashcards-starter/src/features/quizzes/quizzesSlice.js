import { createSlice } from "@reduxjs/toolkit";
import { addQuizId_ForTopic } from "../topics/topicsSlice";

const initialState = {
    quizzes: {}
};

const quizzesSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {
        addQuiz: (state, action) => {
            const { id } = action.payload;
            state.quizzes[id] = action.payload;
        }
    }
})

export const selectQuizzes = state => state.quizzes.quizzes;

export const { addQuiz } = quizzesSlice.actions;

export default quizzesSlice.reducer;

export const addQuizForTopic_Id = (payload) => (dispatch) => {
    dispatch(addQuiz(payload));
    dispatch(addQuizId_ForTopic({ topicId: payload.topicId, quizId: payload.id }));
} 
