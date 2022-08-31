import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authSignIn } from '../../feauters/applicationSlice';

import styles from '../Auth/auth.module.css'

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
        <div className={styles.login}>
            <div className={styles.loginScreen}>
                <div className={styles.appTitle}>
                    <h1>Login</h1>
                </div>
                <div className={styles.loginForm}>
                    <div className={styles.controlGroup}>
                        <form onSubmit={handleSignIn}>
                            <input
                                id="login-name"
                                className={styles.loginField}
                                type='text'
                                value={login}
                                placeholder='login'
                                onChange={handleSetName}
                            />
                        </form>
                    </div>
                    <br />
                    <div className={styles.controlGroup}>
                        <form>
                            <input
                                id="login-pass"
                                className={styles.loginField}
                                type='password'
                                value={password}
                                placeholder='password'
                                onChange={handleSetPass}
                            />
                            <br />
                            <button className={styles.btn} type='submit' onClick={handleSignIn}>Sign in</button>
                            <a className={styles.loginLink} href="#">Lost your password?</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;