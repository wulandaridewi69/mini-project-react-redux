import {
    createSlice,
    // createSelector,
    PayloadAction,
    // createAsyncThunk
} from '@reduxjs/toolkit';

// import { RootState, StoreDispatch, StoreGetState } from '../configureStore';
import { WEB_MAP_ID } from '../../constants/constants'


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
            state.token = action.payload;
        },
    },
});

const { reducer } = slice;

export const { tokenChanged } = slice.actions;

export default reducer;
