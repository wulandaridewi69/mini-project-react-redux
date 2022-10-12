import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../configureStore';

export const selectComments = createSelector(
    (state: RootState) => state.Comments.comment,
    (comment) => comment
);
