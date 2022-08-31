import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authSignIn } from '../feauters/applicationSlice';
import './autho.css'

const SignIn = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState()
   
    const dispatch = useDispatch();

    const handleSetName = (e) => {
        setLogin(e.target.value);
    }

    const handleSetPass = (e) => {
        setPassword(e.target.value);
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        dispatch(authSignIn({ login, password }))
    }

    return (
        <div className='login'>
            <div className='login-screen'>
                <div class="app-title">
                    <h1>Login</h1>
                </div>
                <div class="login-form">
                    <div class="control-group">
                        <form onSubmit={handleSignIn}>
                            <input
                                id="login-name"
                                class="login-field"
                                type='text'
                                value={login}
                                placeholder='login'
                                onChange={handleSetName}
                            />
                        </form>
                    </div>
                    <br />
                    <div class="control-group">
                        <form>
                            <input
                                id="login-pass"
                                class="login-field"
                                type='password'
                                value={password}
                                placeholder='password'
                                onChange={handleSetPass}
                            />
                            <br />
                            <button class="btn btn-primary btn-large btn-block" type='submit' onClick={handleSignIn}>Sign in</button>
                            <a class="login-link" href="#">Lost your password?</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;