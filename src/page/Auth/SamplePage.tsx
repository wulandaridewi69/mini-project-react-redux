import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { ErrorBoundary } from '../../components';
import Logo from '../../assets/IconLogo.png'

const SamplePage = () => {
    const params = useParams()
    console.log("params: ", params)

    return (
       <>
            tes for id params : {params.id}
       </>
    );
};

export default SamplePage;
