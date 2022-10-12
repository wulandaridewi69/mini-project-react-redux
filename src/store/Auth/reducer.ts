import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';


export type AuthState = {
    token?: string,
    username?: string,
};

export const initialAuthState: AuthState = {
    token: '',
    username: '',
};

const slice = createSlice({
    name: 'Auth',
    initialState: initialAuthState,
    reducers: {
        tokenChanged: (state, action: PayloadAction<string>) => {
            console.log("state, action", state.token, action)
            state.token = action.payload;
        },
        usernameChanged: (state, action: PayloadAction<string>) => {
            console.log("state, action", state.username, action)
            state.username = action.payload;
        },
    },
});

const { reducer } = slice;

export const { tokenChanged, usernameChanged } = slice.actions;

export default reducer;
