import './index.css';
import axios from 'axios';

import BrowserTheme from '../../features/themes/theme';
import Border from '../../components/Border.module.css';
import CustomCheckBox from '../../vendor/components/CustomCheckBox.module.css';
import SLoader from '../../vendor/components/SmallLoader';

import React, { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';

import cookieFunctions from '../../features/cookie/cookie_manager';
import LoadingScreen from '../../components/Loader/LoadingScreen';

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [saveUser, setUser] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [loginErrorMsg, setLoginErrorMsg] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [loginBtnIsLoading, setLoginBtnIsLoading] = useState(" btnNotLoading");

    const navigate = useNavigate();
    const linkState = useLocation();

    async function getSavedUser(){
        if(linkState.state && isLoading){
            setIsLoading(false);
        }else{
            const savedUser = await cookieFunctions.GetCookie();
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

    function resetErrorMsg(){
        if(loginErrorMsg !== "" || errorMsg !== ""){
            setLoginErrorMsg("");
            setErrorMsg("");
        }
    }

    const loginHandler = async (e) => {
        e.preventDefault();
        
        if(username.trim() === "" && password.trim() === ""){
            setErrorMsg("Fill all fields");
        }else{
            setLoginBtnIsLoading(" loadingBtn");
            const data = {
                'from': `${process.env.REACT_APP_DB_COLLECTION}/${process.env.REACT_APP_DB_DOCUMENT}/${process.env.REACT_APP_DB_DOCUMENTT}/${username}`,
                'limit': 'Na'
            }
    
            axios.post('https://fireapi.onrender.com/select', data, {
                headers: {
                    'apikey': process.env.REACT_APP_FIREAPI_KEY
                }}
            )
            .then(response => {
                const res = response.data;
                
                if(res === "Data does not exist!"){
                    setLoginErrorMsg("Username not found");
                    setLoginBtnIsLoading(" btnNotLoading");
                }else{
                    const userPass = ''+res;
                    if(password === userPass){
                        if(saveUser) cookieFunctions.setCookie(username, password);
                        navigate("/", { state: username, replace: true});
                    }else{
                        setLoginErrorMsg("Wrong password");
                    }
                    setLoginBtnIsLoading(" btnNotLoading");
                }
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
        <>
        { loginBtnIsLoading === " btnNotLoading" ? (
            <button className={Border.buttonBorder +loginBtnIsLoading} onClick={loginHandler}>Login</button>
        ) : (
            <button className={Border.buttonBorder +loginBtnIsLoading} disabled={true}><SLoader />&nbsp;Login</button>
        )}
        </>
    )
    
    const signupButton = (
        <>
        <button className={Border.noDesignButton}><Link to="/Signup" replace state={"FromLogin"}>Sign up</Link></button>
        <Outlet />
        </>
    )
    
    return (
        <main>
        {isLoading === false ? (
            <>
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
                        <label className={CustomCheckBox.custom_checkbox}>
                            <input name="dummy" type="checkbox" id="rememberMe" onChange={(e) => setUser(e.target.checked)}/>
                            <span className={CustomCheckBox.checkmark}></span>
                        </label>
                        <label htmlFor="rememberMe">Remember me</label>
                    </span>
                    <p className="loginError">{errorMsg}</p>
                    {loginButton}
                    <p className="loginError">{loginErrorMsg}</p>
                </form>
                <div id="signup">
                    <p>Need an account?&nbsp;</p>
                    {signupButton}
                </div>
            </div>
            {/* <a>Login as Guest</a> */}
            </>
        ) : (
            <LoadingScreen />
        )}
        </main>
    )
}

export default Login;
