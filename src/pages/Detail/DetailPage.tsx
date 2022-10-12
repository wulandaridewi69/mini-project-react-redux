// @ts-nocheck
import React from 'react';
import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Logo from '../../assets/getplus.png';
import Card from '../../components/card/Cards';
import Layout from '../../components/layout/Layout';
import Button from '../../components/button/Button';
import Feedback from '../../components/feedback/Feedback';
import { ARTICLE_API } from '../../constants/constants';
import { fetchDetail } from '../../store/Detail/thunks';
import { fetchComment, submitComment } from '../../store/Comments/thunks';
import { selectDetail } from '../../store/Detail/selectors';
import { selectComments } from '../../store/Comments/selectors';

const DetailPage = () => {

    const [newComment, setNewComment] = useState("");
    const detail = useSelector(selectDetail);
    const comment = useSelector(selectComments);
    const dispatch = useDispatch();
    const param = useParams();
    const detail_id = param.id;


    useEffect(() => {
        dispatch(fetchDetail(detail_id));
        dispatch(fetchComment(detail_id));
    }, []);

    const handleSubmit = () => {
        dispatch(submitComment(detail_id, newComment));
        dispatch(fetchComment(detail_id));  
    }


    return (
        <Layout>
            <div className='container pb-12 pt-12'>
                <div className='row'>
                    <div className='col-md-6 border rounded-lg pb-4'>
                        <img src={detail.image} />
                    </div>
                    <div className='col-md-6'>
                        <div className='text-yellow-600 font-bold pb-2 text-4xl'>{detail.previewContent}</div>
                        <div className='pb-2 text-white text-3xl'><h5>By : {detail.createBy}</h5></div>
                        <div className='pb-2 text-base text-slate-400'><h5>{detail.createdAt}</h5></div>
                        <hr className='bg-white' />
                        <div className='pt-4 text-white text-lg'>{detail.content}</div>
                    </div>
                </div>
            </div>
            <hr className='pb-8' />
            <div className='text-center text-white font-bold text-3xl pt-4 pb-6'>
                <h1>FEEDBACK</h1>
            </div>
            <div className='container text-black pt-10'>
                <div className='row'>
                    {comment.map((item) => (                    
                    <div className=' col-sm-12 &nbsp col-md-6 col-lg-4 col-xl-3 bg-white border rounded-lg text-black'>
                        <Feedback 
                        className='gap-y-4'
                            key={item.id}
                            id={item.id}
                            user={item.user}
                            createAt={item.createdAt}
                            comment={item.comment}
                            delete={item.id}
                            detail_id={detail_id}
                        />
                    </div>
                    ))}
                </div>
            </div>
            <div className='pt-32 text-center'>
                <textarea className='border rounded-lg text-left w-1/2 h-auto' placeholder='Feedback' />
                <div className='pb-8 text-center pt-8 '>
                    <Button className='hover:bg-white pl-10 pr-10 font-bold bg-blue-300 rounded-full' onClick={handleSubmit}>Submit Feedback</Button>
                </div>
            </div>
        </Layout>
    );
};

export default DetailPage;
