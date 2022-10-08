// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ErrorBoundary } from '../../components';
import Logo from '../../assets/IconLogo.png'
import Button from '../../components/button/Button';
import { fetchLogin } from '../../store/Auth/thunks';
import { selectToken } from '../../store/Auth/selectors';
import { useSelector, useDispatch } from 'react-redux';

const LoginPage = () => {
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const [auth, setAuth] = useState({
        password: password,
        email: email
    })

    const token = useSelector(selectToken); //get data redux

    const dispatch = useDispatch(); //CRUD


    return (
        <div>
            <div>
            <Button onClick={() => dispatch(fetchLogin(auth))}>SUBMIT</Button>
            <h1>TOKEN : {token}</h1>
       </div>
        </div>
       
    );
};

export default LoginPage;
