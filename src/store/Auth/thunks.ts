import { List } from 'reselect/es/types';
import { RootState, StoreDispatch, StoreGetState } from '../configureStore';
import { tokenChanged } from './reducer';
// FYI : Good resource about what "thunks" are, and why they're 
// used for writing Redux logic: https://redux.js.org/usage/writing-logic-thunks

import { URL_API } from '../../constants/constants'


// CRUD & function that change redux data put it here (thunks.ts)
export const login =
    (auth: object) =>
        async (dispatch: StoreDispatch, getState: StoreGetState) => {
            try {
                let token;
                let myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                let raw = JSON.stringify(auth);

                let requestOptions: RequestInit = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                fetch(`${URL_API}/api/v1/login`, requestOptions)
                    .then(response => {
                        if (response.status == 200) {
                            return response.json()
                        } else {
                            throw Error("Unauthorize")
                        }
                    })
                    .then(result => {
                        token = result.result;
                        dispatch(tokenChanged(token));
                    })
                    .catch(error => alert(error));
            } catch (err) {
                console.error(err);
            }
        };

export const register =
    (auth: object) =>
        async (dispatch: StoreDispatch, getState: StoreGetState) => {
            try {
                let token;
                // do some async CRUD work here
                // ...

                // now everything is ready and we can dispatch the new data
                dispatch(tokenChanged(token));
            } catch (err) {
                console.error(err);
            }
        };
