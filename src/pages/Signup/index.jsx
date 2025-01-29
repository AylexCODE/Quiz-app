import {} from './index.css';
import axios from 'axios';

import React, { useState } from 'react';

import BrowserTheme from '../../features/themes/theme';
import Border from '../../components/Border.module.css';

import { Outlet, Link } from 'react-router-dom';

function Signup(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [signupErrorMsg, setSignupErrorMsg] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();

        if(username.trim() === "" || password.trim() === "" || password2.trim() === ""){
            setSignupErrorMsg("Fill all fields");
        }else if(password !== password2){
            setSignupErrorMsg("Passwords does not match");
        }else{
            //w
        }
    }

    function resetErrorMsg(){
        setSignupErrorMsg("");
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
                    <input type="text" className={Border.inputBorder} onChange={(e) => {setUsername(e.target.value); resetErrorMsg()}} required />

                    <label>Password</label>
                    <input type="password" className={Border.inputBorder} onChange={(e) => {setPassword(e.target.value); resetErrorMsg()}} required />

                    <label>Confirm Password</label>
                    <input type="password" className={Border.inputBorder} onChange={(e) => {setPassword2(e.target.value); resetErrorMsg()}} required />

                    <button type="submit" className={Border.buttonBorder} onClick={handleSignUp}>Signup</button>
                    <p className="signupError">{signupErrorMsg}</p>                
                </form>
                <div id="login">
                    <p>Have an account?&nbsp;</p>
                    {loginButton}
                </div>
            </div>
        </main>
    )
}

export default Signup;