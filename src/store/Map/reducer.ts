import {
    createSlice,
    // createSelector,
    PayloadAction,
    // createAsyncThunk
} from '@reduxjs/toolkit';

// import { RootState, StoreDispatch, StoreGetState } from '../configureStore';
import { WEB_MAP_ID } from '../../constants/constants'


// All data redux saved as object here (reducers.ts)

export type MapState = {
    // ArcGIS Online Webmap Item Id
    webmapId?: string;
};

export const initialMapState: MapState = {
    webmapId: WEB_MAP_ID, // Topographic
};

const slice = createSlice({
    name: 'Map',
    initialState: initialMapState,
    reducers: {
        webmapIdChanged: (state, action: PayloadAction<string>) => {
            state.webmapId = action.payload;
        },
    },
});

const { reducer } = slice;

export const { webmapIdChanged } = slice.actions;

export default reducer;
