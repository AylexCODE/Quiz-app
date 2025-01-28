import {} from './index.css';
import axios from 'axios';

import React, { useState } from 'react';

import BrowserTheme from '../../features/themes/theme';
import Border from '../../components/Border.module.css';

import { Outlet, Link } from 'react-router-dom';

function Signup(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();
    }

    const loginButton = (
        <>
        <button className={Border.noDesignButton}><Link to="../Login">Log in</Link></button>
        <Outlet />
        </>
    );

    return (
        <main>
            <span className="toggleThemeSwitch">
                <BrowserTheme />
            </span>
            <div className={Border.defaultBorder} id="form">
                <form onSubmit={handleSignUp}>
                    <h2>Signup</h2>

                    <label>Username</label>
                    <input type="text" className={Border.inputBorder} />

                    <label>Password</label>
                    <input type="password" className={Border.inputBorder} />

                    <label>Confirm Password</label>
                    <input type="password" className={Border.inputBorder} />

                    <button type="submit" onClick={handleSignUp}>Signup</button>
                </form>
                <div id="login">
                    <p>Already have an account?&nbsp;</p>
                    {loginButton}
                </div>
            </div>
        </main>
    )
}

export default Signup;