import React from 'react';
import { Link } from 'react-router-dom';

import { ErrorBoundary } from '../../components';

const HomePage = () => {
    return (
        <ErrorBoundary>
            <h1>React Redux Boilerplate</h1>
            <p>You can put the components of your app here</p>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/demo'>Demo</Link></li>
                <li><Link to='/404'>404</Link></li>
            </ul>
        </ErrorBoundary>
    );
};

export default HomePage;
