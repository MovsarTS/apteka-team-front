import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authSignUp } from '../feauters/applicationSlice';
import './autho.css'

const SignUp = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    
    const dispatch = useDispatch()

    const handleSetName = (e) => {
        setLogin(e.target.value);
    }

    const handleSetPass = (e) => {
        setPassword(e.target.value);
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        dispatch(authSignUp({ login, password }))
    }


    return (
        <div className='login'>
        <div className='login-screen'>
            <div class="app-title">
                <h1>Register</h1>
            </div>
            <div class="login-form">
                <div class="control-group">
                    <form onSubmit={handleSignUp}>
                        <input
                            id="login-name"
                            class="login-field"
                            type='text'
                            value={login}
                            placeholder='name'
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
                        <button class="btn btn-primary btn-large btn-block" type='submit' onClick={handleSignUp}>Sign up</button>
                        <a class="login-link" href="#">Do you have an account?</a>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SignUp;