// @ts-nocheck
import React, { useState } from 'react';

import { ErrorBoundary } from '../../components';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { fetchLogin } from '../../store/Auth/thunks';
import { useSelector, useDispatch } from 'react-redux';
import { selectToken } from '../../store/Auth/selectors';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
    
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const token = useSelector(selectToken);

    const dispatch = useDispatch(); 
    const navigate = useNavigate();

    const handleSubmit = () => {
        dispatch(fetchLogin({
            username: username,
            password: password
        }))
        navigate("/");
    }


    return (
        <ErrorBoundary>
            <div className='bg-gray-900 h-full pt-52 pb-52 '>
                <div className='border rounded-lg ml-48 mr-48'>
                    <div className='pt-12 pb-16 text-center'>
                        <img src='https://www.mygetplus.id/assets/images/getplus.svg' />
                    </div>
                    <div className='pl-12 pr-12 pb-12 shadow text-center'>
                        <div >
                            <Input
                                id="loginUsername"
                                className="bg-white rounded-md w-full"
                                type="username"
                                label="Username"
                                onChange={e => setUsername(e.target.value)}
                            />
                        </div>
                        <div className='pt-8'>
                            <Input
                                id="loginPassword"
                                className="bg-white rounded-md w-full"
                                type="password"
                                label="Password"
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='text-center pb-4'>
                        <Button className='pl-10 pr-10 font-bold bg-yellow-600 hover:bg-blue-300 rounded-full' onClick={() => handleSubmit()}>SUBMIT</Button>
                    </div>
                </div>
            </div>
        </ErrorBoundary>
    );
};

export default LoginPage;