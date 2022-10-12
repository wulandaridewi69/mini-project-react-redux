import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../configureStore';

export const selectArticle = createSelector(
    (state: RootState) => state.Home.articles,
    (articles) => articles
);

export const selectMainBanner = createSelector(
    (state: RootState) => state.Home.mainBanner,
    (mainBanner) => mainBanner
);
