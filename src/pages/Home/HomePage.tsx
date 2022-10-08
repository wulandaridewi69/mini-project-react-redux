// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';

import { ErrorBoundary } from '../../components';
import Logo from '../../assets/getplus.png'

const HomePage = () => {

    return (
        <ErrorBoundary>
            <div className='bg-gray-900 text-gray-900 pt-32 pl-80'>
                <img src={Logo} alt="fireSpot" className='pl-48' />
                <div className='flex grid-rows-3 gap-6 text-center text-4xl pt-4 pb-44'>
                    <div className='border rounded-t-lg border-teal-500 pl-12 hover:bg-teal-500 bg-white pr-12 pt-12 pb-12 font-bold'>
                        <Link to='/login'>
                            <h3>Admin</h3>
                        </Link>
                    </div>
                    <div className='border rounded-t-lg border-teal-500 hover:bg-teal-500 bg-white pl-12 pr-12 pt-12 pb-12 font-bold'>
                        <Link to='/login'>
                        <h3>Tentor</h3>
                        </Link>
                    </div>
                    <div className='border rounded-t-lg border-teal-500 hover:bg-teal-500 bg-white pl-12 pr-12 pt-12 pb-12 font-bold'>
                        <Link to='/login'>
                        <h3>Student</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </ErrorBoundary>
    );
};

export default HomePage;
