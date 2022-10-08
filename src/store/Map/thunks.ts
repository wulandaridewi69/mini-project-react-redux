import { List } from 'reselect/es/types';
import { RootState, StoreDispatch, StoreGetState } from '../configureStore';
import { webmapIdChanged } from './reducer';
// FYI : Good resource about what "thunks" are, and why they're 
// used for writing Redux logic: https://redux.js.org/usage/writing-logic-thunks

import { URL_API } from './../../constants/constants'


// CRUD & function that change redux data put it here (thunks.ts)
export const updateWebmap =
    (webmapId: string) =>
    async (dispatch: StoreDispatch, getState: StoreGetState) => {
        try {
            // do some async CRUD work here
            // ...

            // now everything is ready and we can dispatch the new data
            dispatch(webmapIdChanged(webmapId));
        } catch (err) {
            console.error(err);
        }
    };
