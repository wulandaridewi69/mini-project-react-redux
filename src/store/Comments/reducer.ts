import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';

export type CommentState = {
    comment?: any;
};

export const initialCommentState: CommentState = {
    comment: [],
};

const slice = createSlice(
    {
        name: 'Comments',
        initialState: initialCommentState,
        reducers: {
            commentChanged: (state, action: PayloadAction<object>) => {
                console.log("state, action", state.comment, action)
                state.comment = action.payload;
            },
        }
    },
);


const { reducer } = slice;

export const { commentChanged } = slice.actions;

export default reducer;
