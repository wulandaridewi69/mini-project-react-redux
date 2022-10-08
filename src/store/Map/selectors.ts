import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../configureStore';

// Get all saved data from here (selectors.ts)
export const selectWebmapId = createSelector(
    (state: RootState) => state.Map.webmapId,
    (webmapId) => webmapId
);
