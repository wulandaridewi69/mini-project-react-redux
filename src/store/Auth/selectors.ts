import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../configureStore';

// Get all saved data from here (selectors.ts)
export const selectToken = createSelector(
    (state: RootState) => state.Auth.token,
    (token) => token
);
export const selectUsername = createSelector(
    (state: RootState) => state.Auth.username,
    (username) => username
);