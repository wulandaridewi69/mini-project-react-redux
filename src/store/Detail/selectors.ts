import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../configureStore';

export const selectDetail = createSelector(
    (state: RootState) => state.Detail.detail,
    (detail) => detail
);
