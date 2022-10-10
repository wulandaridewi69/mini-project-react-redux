// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

import Logo from '../../assets/getplus.png';
import Card from '../../components/card/Cards';
import Layout from '../../components/layout/Layout';
import Button from '../../components/button/Button';

const HomePage = () => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(9)

    useEffect(() => {
        fetchAllArticles();
    }, []);

    const fetchAllArticles = () => {
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://62d5368fd4406e5235558a46.mockapi.io/articles", requestOptions)
            .then(response => response.json())
            .then(result => {
                setArticles(result);
            })
            .catch(error => alert(error))
            .finally(loading => setLoading(false));
    }

    const showMoreItem = () => {
        setProduct((prevValue) => prevValue + 10);
    }

    const showLessItem = () => {}


    return (
        <Layout>
            <div className='container'>
                <div className='row'>
                    {articles.slice(0, product).map((item) => (
                        <div className='col-md-4'>
                            <Card
                                key={item.id}
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                preview={item.previewContent}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className='ml-72 pl-72 pb-12'>
                <Button className='pl-10 pr-10 font-bold bg-yellow-600 hover:bg-white rounded-full' onClick={showMoreItem}>View More</Button>
            </div>
        </Layout>
    );
};

export default HomePage;
