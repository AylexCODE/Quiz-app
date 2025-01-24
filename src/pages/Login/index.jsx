import {} from './index.css';

import BrowserTheme from '../../features/themes/theme';
import Border from '../../components/Border.module.css';
import CustomCheckBox from './../../vendor/components/CustomCheckBox.module.css';

import React, { useState } from 'react';

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(""); 
    
    const loginHandler = (e) => {
        e.preventDefault();
        
        if(!username || !password){

        }
    };
    
    const loginButton = (
        <button className={Border.buttonBorder} onClick={loginHandler}>Login</button>
    )
    
    const signupButton = (
        <button className={Border.noDesignButton}>Sign up</button>
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
                    <input type="text" className={Border.inputBorder} id="username" onChange={(e) => setUsername(e.target.value)} required />

                    <label htmlFor="password">Password</label>
                    <input type="password" className={Border.inputBorder} id="password" onChange={(e) => setPassword(e.target.value)} required />

                    <span className="rememberAccount"> 
                        <label class={CustomCheckBox.custom_checkbox}>
                            <input name="dummy" type="checkbox" id="rememberMe" />
                            <span class={CustomCheckBox.checkmark}></span>
                        </label>
                        <label htmlFor="rememberMe">Remember me</label>
                    </span>
                    {loginButton}
                </form>
                <div id="signup">
                    <p>Need an account?&nbsp;</p>
                    {signupButton}
                </div>
            </div>
        </main>
    )
}

export default Login;