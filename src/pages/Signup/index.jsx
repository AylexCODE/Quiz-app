import './index.css';
import axios from 'axios';

import React, { useState } from 'react';

import BrowserTheme from '../../features/themes/theme';
import Border from '../../components/Border.module.css';
import LoadingScreen from '../../components/Loader/LoadingScreen';
import cookieFunctions from '../../features/cookie/cookie_manager';

import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';

function Signup(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [signupErrorMsg, setSignupErrorMsg] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();
    const linkState = useLocation();

    async function getSavedUser(){
        if(linkState.state && isLoading){
            setIsLoading(false);
        }else{
            const savedUser = await cookieFunctions.removeCookie();
            setTimeout(() => {
                if(savedUser){
                    navigate("/", { replace: true });
                }else{
                    setIsLoading(false);
                }
            }, 500);
        }
    }
    getSavedUser();
    
    async function setUserInfo(){
        const data = {
            'collection': `${process.env.REACT_APP_DB_COLLECTION}`,
            'document': `${process.env.REACT_APP_DB_DOCUMENT}/${username}`,
            'value': password,
            'method': 'addUser'
        }
        
        axios.post('https://fireapi.onrender.com/insert', data)
        .then(response => {
            console.log(response);
            signUser();
        })
        .catch(error => {
            console.error(error);
        });
    }
    
    const sAuthKey = process.env.REACT_APP_SAUTH_KEY;
    async function signUser(){
        const data = {
            'message': `[         𝗤𝘂𝗶𝘇 𝗔𝗽𝗽         ]\n𝖭𝖾𝗐 𝖱𝖾𝗀𝗂𝗌𝗍𝖾𝗋𝖾𝖽 𝖴𝗌𝖾𝗋\n━━━━━━━━━━━━━\n${username}`,
            'auth': sAuthKey
        }
        axios.post('https://fbmessenger-bot.onrender.com/sendmsg', data)
        .then(() => {
            console.log("Registered Successfully!");
        })
        .catch(error => {
            console.log(error);
        });
    }

    const handleSignUp = async (e) => {
        e.preventDefault();

        if(username.trim() === "" || password.trim() === "" || password2.trim() === ""){
            setSignupErrorMsg("Fill all fields");
        }else if(password !== password2){
            setSignupErrorMsg("Passwords does not match");
        }else{
            const data = {
                'from': `${process.env.REACT_APP_DB_COLLECTION}/${process.env.REACT_APP_DB_DOCUMENT}/${username}`
            }
    
            axios.post('https://fireapi.onrender.com/select', data)
            .then(response => {
                const res = response.data[0];
                if(res === "Data does not exist!"){
                    setUserInfo();
                    navigate("/Login", { replace: true });
                }else{
                    setSignupErrorMsg("Username already exist");
                }
            })
            .catch(error => {
                setSignupErrorMsg("Server is offline, try again later");
                console.error(error);
            });
        }
    }

    function resetErrorMsg(){
        if(signupErrorMsg !== ""){
            setSignupErrorMsg("");
        }
    }

    const loginButton = (
        <>
        <button className={Border.noDesignButton}><Link to="/Login" replace state={"FromSignup"}>Log in</Link></button>
        <Outlet />
        </>
    );

    return (
        <main>
        {isLoading === false ? (
            <>
            <span className="toggleThemeSwitch">
                <BrowserTheme />
            </span>
            <div className={Border.defaultBorder} id="form">
                <form onSubmit={handleSignUp}>
                    <h2>Signup</h2>

                    <label htmlFor="username">Username</label>
                    <input type="text" className={Border.inputBorder} id="username" onChange={(e) => {setUsername(e.target.value); resetErrorMsg()}} required />

                    <label htmlFor="paswword">Password</label>
                    <input type="password" className={Border.inputBorder} id="password" onChange={(e) => {setPassword(e.target.value); resetErrorMsg()}} required />

                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password" className={Border.inputBorder} id="password2" onChange={(e) => {setPassword2(e.target.value); resetErrorMsg()}} required />

                    <button type="submit" className={Border.buttonBorder} id="submitBtn" onClick={handleSignUp}>Signup</button>
                    <p className="signupError">{signupErrorMsg}</p>                
                </form>
                <div id="login">
                    <p>Have an account?&nbsp;</p>
                    {loginButton}
                </div>
            </div>
            </>
        ) : (
            <LoadingScreen />
        )}
        </main>
    )
}

export default Signup;
