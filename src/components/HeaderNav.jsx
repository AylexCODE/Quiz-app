import './HeaderNavStyle.css';

import React, { useState } from 'react';

import QuizAppLogo from '../assets/icons/QuizAppLogo';
import BrowserTheme from '../features/themes/theme';
import Border from './Border.module.css';
import AccountSettings from '../vendor/components/Utilities/AccountSettings';

function Nav(props){
    const [ isSettingsOpen, setIsSettingsOpen ] = useState(false);
    const userName = props.name_initial;

    return (
        <>
        <nav>
            <span>
                <QuizAppLogo />
                <p>Quiz Master</p>
            </span>
            <span>
                <span>
                    <BrowserTheme />
                </span>
                <span>
                    <input type="checkbox" id="userInitial" onChange={(e) => {setIsSettingsOpen(e.target.checked)}}/>
                    <label className={Border.buttonBorder +" initialName"} htmlFor="userInitial">{userName[0]}</label>
                </span>
            </span>
        </nav>
        <AccountSettings isOpen={isSettingsOpen} initialName={userName} />
        </>
    );
}

export default Nav;
