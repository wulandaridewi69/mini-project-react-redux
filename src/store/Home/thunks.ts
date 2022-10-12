// @ts-nocheck
import { List } from 'reselect/es/types';
import { RootState, StoreDispatch, StoreGetState } from '../configureStore';
import { articleChanged, mainBannerChanged } from './reducer';

import { ARTICLE_API } from '../../constants/constants';


export const fetchArticles =
    (search: string) =>
        async (dispatch: StoreDispatch, getState: StoreGetState) => {
            try {

                let requestOptions = {
                    method: 'GET',
                    redirect: 'follow'
                };

                fetch(`${ARTICLE_API}/articles?title=${search}`, requestOptions)
                    .then(response => {
                        if (response.status == 200) {
                            return response.json()
                        }
                    })
                    .then(result => {
                        console.log("result", result)
                        dispatch(articleChanged(result));

                    })
                    .catch(error => alert(error));
            } catch (error) {
                console.error(error);
            }
        };

export const fetchMainBanner =
    (id: string) =>
        async (dispatch: StoreDispatch, getState: StoreGetState) => {
            try {
                let requestOptions = {
                    method: 'GET',
                    redirect: 'follow'
                };

                fetch(`${ARTICLE_API}/banners`, requestOptions)
                    .then(response => {
                        if (response.status == 200) {
                            return response.json()
                        } else {
                            throw Erorr('Internal Error');
                        }
                    })
                    .then(result => {
                        console.log("result", result)
                        dispatch(mainBannerChanged(result));
                    })
                    .catch(error => alert(error))
            } catch (error) {
                console.error(error);
            }
        };