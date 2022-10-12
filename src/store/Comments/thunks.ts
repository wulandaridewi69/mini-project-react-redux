// @ts-nocheck
import { List } from 'reselect/es/types';
import { RootState, StoreDispatch, StoreGetState } from '../configureStore';
import { commentChanged } from './reducer';
import { selectUsername } from '../Auth/selectors';

import { ARTICLE_API } from '../../constants/constants';


export const fetchComment = (id_article) =>
    async (dispatch: StoreDispatch, getState: StoreGetState) => {
        try {
            let requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch(`${ARTICLE_API}/articles/${id_article}/comments`, requestOptions)
                .then(response => {
                    if (response.status == 200) {
                        return response.json()
                    } else {
                        throw Error("Internal Error")
                    }
                })
                .then(result => {
                    console.log("result", result)
                    dispatch(commentChanged(result));
                })
                .catch(error => console.log('error', error));
        } catch (error) {
            console.error(error);
        }
    };


export const submitComment = (id_article, comment) =>
    async (dispatch: StoreDispatch, getState: StoreGetState) => {
        
        try {
            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            let raw = JSON.stringify({
                "user": getState().Auth.username,
                "comment": comment,
                "articleId": id_article
            });

            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch(`${ARTICLE_API}/articles/${id_article}/comments`, requestOptions)
                .then(response => {
                    if (response.status == 201) {
                        return response.json()
                    } else {
                        throw Error("Internal Error")
                    }
                })
                .then(result => {
                    console.log("result", result);
                })
                .catch(error => console.log('error', error));
        } catch (error) {
            console.error(error);
        }
    };

export const deleteComment = (id_article, id_comment) =>
    async (dispatch: StoreDispatch, getState: StoreGetState) => {
        try {
            let requestOptions = {
                method: 'DELETE',
                redirect: 'follow'
            };

            fetch(`${ARTICLE_API}/articles/${id_article}/comments/${id_comment}`, requestOptions)
                .then(response => {
                    if (response.status == 200) {
                        return response.json()
                    } else {
                        throw Error("Internal Error")
                    }
                })
                .then(result => {
                    console.log("result", result)
                })
                .catch(error => console.log('error', error));
        } catch (error) {
            console.error(error);
        }
    };


//update comment
// export const fetchComment =
//     (id_comment: object) =>
//         async (dispatch: StoreDispatch, getState: StoreGetState) => {
//             try {
//                 let myHeaders = new Headers();
//                 myHeaders.append("Content-Type", "application/json");

//                 let raw = JSON.stringify({
//                     "user": "meena",
//                     "comment": "not eem",
//                     "articleId": "12"
//                 });

//                 let requestOptions = {
//                     method: 'PUT',
//                     headers: myHeaders,
//                     body: raw,
//                     redirect: 'follow'
//                 };

//                 fetch(`${RTICLE_API}/articles/${id_article}/comments/${id_comment}`, requestOptions)
//                     .then(response => {
//                         if (response.status == 200) {
//                             return response.json()
//                         } else {
//                             throw Error ("Internal Error")
//                         }
//                     })
//                     .then(result => {
//                         console.log("result", result)
//                         dispatch(commentsChanged(result));
//                     })
//                     .catch(error => console.log('error', error));
//             } catch (error) {
//                 console.error(error);
//             }
//         };
