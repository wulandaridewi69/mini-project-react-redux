import { List } from 'reselect/es/types';
import { RootState, StoreDispatch, StoreGetState } from '../configureStore';
import { tokenChanged } from './reducer';

import { URL_API } from '../../constants/constants'


export const fetchLogin =
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
                        console.log("status api", response.status)
                        if (response.status == 200) {
                            return response.json()
                        } else {
                            throw Error("Unauthorize")
                        }
                    })
                    .then(result => {
                        console.log("result", result)
                        token = result.result;
                        dispatch(tokenChanged(token));
                    })
                    .catch(error => alert(error));
            } catch (error) {
                console.error(error);
            }
        };