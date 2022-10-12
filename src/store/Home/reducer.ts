import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';

export type HomeState = {
    articles?: any,
    mainBanner?: any,
};

export const initialHomeState: HomeState = {
    articles: [],
    mainBanner: [],
};

const slice = createSlice({
    name: 'Home',
    initialState: initialHomeState,
    reducers: {
        articleChanged: (state, action: PayloadAction<string>) => {
            console.log("state, action", state.articles, action)
            state.articles = action.payload;
        },
        mainBannerChanged: (state, action: PayloadAction<string>) => {
            console.log("state, action", state.mainBanner, action)
            state.mainBanner = action.payload;
        },
    },
});

const { reducer } = slice;

export const { articleChanged, mainBannerChanged } = slice.actions;

export default reducer;
