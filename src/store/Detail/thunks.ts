// @ts-nocheck
import { List } from 'reselect/es/types';
import { RootState, StoreDispatch, StoreGetState } from '../configureStore';
import { detailChanged } from './reducer';

import { ARTICLE_API } from '../../constants/constants';


export const fetchDetail =
    (id: string) =>
        async (dispatch: StoreDispatch, getState: StoreGetState) => {
            try {
                let requestOptions = {
                    method: 'GET',
                    redirect: 'follow'
                  };
                  
                  fetch(`${ARTICLE_API}/articles/${id}`, requestOptions)
                    .then(response => {
                        if (response.status == 200) {
                            return response.json()
                        }
                    })
                    .then(result => {
                        console.log("result", result)
                        dispatch(detailChanged(result));
                    })
                    .catch(error => alert(error));            
            } catch (error) {
                console.error(error);
            }
        };