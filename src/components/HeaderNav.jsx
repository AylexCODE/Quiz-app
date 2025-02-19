import './HeaderNavStyle.css';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cookieFunctions from '../features/cookie/cookie_manager';

import QuizAppLogo from '../assets/icons/QuizAppLogo';
import Border from './Border.module.css';
import AccountSettings from '../vendor/components/Utilities/AccountSettings';

function Nav(props){
    const [ isSettingsOpen, setIsSettingsOpen ] = useState(false);
    const navigate = useNavigate();

    async function logOut(){
        try {
            await cookieFunctions.removeCookie();
        } catch(noCookie){}
        navigate("/", { replace: true });
    }

    const LogOutButton = (
        <>
        <button onClick={logOut}>Logout</button>
        </>
    )

    return (
        <>
        <nav>
            <span>
                <QuizAppLogo />
                <p>Quiz Master</p>
            </span>
            <span>
                <input type="checkbox" id="userInitial" onChange={(e) => {setIsSettingsOpen(e.target.checked)}}/>
                <label className={Border.buttonBorder +" initialName"} htmlFor="userInitial">{props.name_initial}</label>
            </span>
        </nav>
        <AccountSettings isOpen={isSettingsOpen} />
        </>
    );
}

export default Nav;
