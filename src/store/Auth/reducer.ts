import {
    createSlice,
    // createSelector,
    PayloadAction,
    // createAsyncThunk
} from '@reduxjs/toolkit';


// All data redux saved as object here (reducers.ts)

export type AuthState = {
    token?: string;
};

export const initialAuthState: AuthState = {
    token: '',
};

const slice = createSlice({
    name: 'Auth',
    initialState: initialAuthState,
    reducers: {
        tokenChanged: (state, action: PayloadAction<string>) => {
            console.log("state, action", state.token, action)
            state.token = action.payload;
        },
    },
});

const { reducer } = slice;

export const { tokenChanged } = slice.actions;

export default reducer;
