import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    topics: {}
}

const topicsSlice = createSlice({
    name: "topics",
    initialState,
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics[id] = { id, name, icon, quizIds: [] };
        },
        addQuizId_ForTopic: (state, action) => {
            const { topicId, quizId } = action.payload;
            state.topics[topicId].quizIds.push(quizId);
        }
    }
})

export const selectTopics = state => state.topics.topics;

export const { addTopic, addQuizId_ForTopic } = topicsSlice.actions;

export default topicsSlice.reducer;