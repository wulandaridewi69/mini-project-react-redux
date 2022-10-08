// @ts-nocheck
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { ErrorBoundary } from '../../components';
import Logo from '../../assets/IconLogo.png'
import Button from '../../components/button/Button';
import { fetchLogin } from '../../store/Auth/thunks';
import { selectToken } from '../../store/Auth/selectors';
import { useSelector, useDispatch } from 'react-redux';

const SamplePage = () => {
    const [auth, setAuth] = useState({
        username: "admin",
        password: "admin123"
    })

    const param = useParams();

    const token = useSelector(selectToken); //get data redux

    const dispatch = useDispatch(); //CRUD

    return (
       <>
            <Button onClick={() => dispatch(fetchLogin(auth))}>SUBMIT</Button>
            <h1>ID : {param.id}</h1>
            <h1>TOKEN : {token}</h1>
       </>
    );
};

export default SamplePage;
