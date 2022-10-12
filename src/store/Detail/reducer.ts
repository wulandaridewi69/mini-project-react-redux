import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';

export type DetailState = {
    detail?: object;
};

export const initialDetailState: DetailState = {
    detail: {},
};

const slice = createSlice({
    name: 'Detail',
    initialState: initialDetailState,
    reducers: {
        detailChanged: (state, action: PayloadAction<object>) => {
            console.log("state, action", state.detail, action)
            state.detail = action.payload;
        },
    },
});

const { reducer } = slice;

export const { detailChanged } = slice.actions;

export default reducer;
