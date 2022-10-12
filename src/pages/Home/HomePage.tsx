// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import Logo from '../../assets/getplus.png';
import Card from '../../components/card/Cards';
import Layout from '../../components/layout/Layout';
import Button from '../../components/button/Button';
import Banner from '../../components/banner/Banner';
import { fetchArticles, fetchMainBanner } from '../../store/Home/thunks';
import { selectArticle, selectMainBanner } from '../../store/Home/selectors';

const HomePage = () => {

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(10);
    const articles = useSelector(selectArticle);
    const banner = useSelector(selectMainBanner);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchArticles(''));
        dispatch(fetchMainBanner());
    }, []);


    const showMoreItem = () => {
        setProduct((prevValue) => prevValue + 10);
    }

    const showLessItem = () => {
        setProduct((prevValue) => prevValue - 10);
    }

    return (
        <Layout>
            <div className='text-center text-white font-bold text-3xl pt-4 pb-4'>
                <h1>ARTICLE</h1>
            </div>
            <div className='container'>
                <div className='row'>
                    {articles.slice(0, product).map((item) => (
                        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3 '>
                            <a href={`/detail/${item.id}`}>
                                <Card
                                    key={item.id}
                                    id={item.id}
                                    image={item.image}
                                    title={item.title}
                                    preview={item.previewContent}
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className='text-center pb-12'>
                <Button className='pl-10 pr-10 font-bold bg-yellow-600 hover:bg-blue-300 rounded-full' onClick={showMoreItem}>View More</Button>
            </div>
            <div>
                <div className='text-center text-white font-bold text-3xl pt-4 pb-4'>
                    <h1>BANNER</h1>
                </div>
                {banner.map((items) => (
                    <div>
                        <Banner
                            key={items.id}
                            id={items.id}
                            img={items.images}
                        />
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default HomePage;
