import {} from './index.css';
import axios from 'axios';

import BrowserTheme from '../../features/themes/theme';
import Border from '../../components/Border.module.css';
import CustomCheckBox from './../../vendor/components/CustomCheckBox.module.css';

import React, { useState } from 'react';
import { Outlet, Link, Navigate } from 'react-router-dom';

import cookieFunctions from '../../features/cookie/cookie_manager';

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let [loginErrorMsg, setLoginErrorMsg] = useState("");

    async function getSavedUser(){
        if(await cookieFunctions.GetCookie()){
            return <Navigate to="./pages/Home/index" />
        }
    }

    getSavedUser();

    function resetErrorMsg(){
        setLoginErrorMsg("");
    }

    const loginHandler = async (e) => {
        e.preventDefault();
        console.log(await cookieFunctions.GetCookie());
        if(username.trim() !== "" && password.trim() !== ""){
            const data = {
                'from': `Quiz_App/Users/${username}`
            }
    
            axios.post('https://fireapi.onrender.com/select', data)
            .then(response => {
                const res = response.data[0];

                if(res === "Data does not exits!"){
                    setLoginErrorMsg("Username not found");
                }else{
                    const userPass = res?.data?.Password;
                    if(password === userPass){
                        //
                    }else{
                        setLoginErrorMsg("Wrong password");
                    }
                }

               cookieFunctions.setCookie(username, password);
            })
            .catch(error => {
                setLoginErrorMsg("Server is offline, try again later");
                console.log(error);
            });
    /*
    fetch('https://fireapi.onrender.com/select', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }).then(
        response => response.json()
    ).then((data) => {
       console.log(data)
    }).catch((err) => {
        console.log(err);
    });
    */
            //setLoginErrorMsg("Username not found");
        }
    };
    
    const loginButton = (
        <button className={Border.buttonBorder} onClick={loginHandler}>Login</button>
    )
    
    const signupButton = (
        <>
        <button className={Border.noDesignButton}><Link to="../../../pages/Signup/index">Sign up</Link></button>
        <Outlet />
        </>
    )
    
    return (
        <main>
            <span className="toggleThemeSwitch">
                <BrowserTheme />
            </span>
            <div className={Border.defaultBorder} id="form">
                <form onSubmit={loginHandler}>
                    <h2>Login</h2>

                    <label htmlFor="username">Username</label>
                    <input type="text" className={Border.inputBorder} id="username" onChange={(e) => {setUsername(e.target.value); resetErrorMsg()}} required />

                    <label htmlFor="password">Password</label>
                    <input type="password" className={Border.inputBorder} id="password" onChange={(e) => {setPassword(e.target.value); resetErrorMsg()}} required />

                    <span className="rememberAccount"> 
                        <label class={CustomCheckBox.custom_checkbox}>
                            <input name="dummy" type="checkbox" id="rememberMe" />
                            <span class={CustomCheckBox.checkmark}></span>
                        </label>
                        <label htmlFor="rememberMe">Remember me</label>
                    </span>
                    {loginButton}
                    <p className="loginError">{loginErrorMsg}</p>
                </form>
                <div id="signup">
                    <p>Need an account?&nbsp;</p>
                    {signupButton}
                </div>
            </div>
            {/* <a>Login as Guest</a> */}
        </main>
    )
}

export default Login;