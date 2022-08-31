import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authSignUp } from '../../feauters/applicationSlice';

import styles from '../Auth/auth.module.css'

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
        <div className={styles.login}>
        <div className={styles.loginScreen}>
            <div class={styles.appTitle}>
                <h1>Register</h1>
            </div>
            <div class={styles.loginForm}>
                <div class={styles.controlGroup}>
                    <form onSubmit={handleSignUp}>
                        <input
                            id="login-name"
                            class={styles.loginField}
                            type='text'
                            value={login}
                            placeholder='name'
                            onChange={handleSetName}
                        />
                    </form>
                </div>
                <br />
                <div class={styles.controlGroup}>
                    <form>
                        <input
                            id="login-pass"
                            class={styles.loginField}
                            type='password'
                            value={password}
                            placeholder='password'
                            onChange={handleSetPass}
                        />
                        <br />
                        <button class={styles.btn} type='submit' onClick={handleSignUp}>Sign up</button>
                        <a class={styles.loginLink} href="#">Do you have an account?</a>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SignUp;