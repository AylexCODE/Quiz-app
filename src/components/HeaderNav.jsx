import './HeaderNavStyle.css';

import React, { useState } from 'react';

import QuizAppLogo from '../assets/icons/QuizAppLogo';
import BrowserTheme from '../features/themes/theme';
import Border from './Border.module.css';
import AccountSettings from '../vendor/components/Utilities/AccountSettings';

function Nav(props){
    const [ isSettingsOpen, setIsSettingsOpen ] = useState(false);

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
        <AccountSettings isOpen={isSettingsOpen} initialName={props.name_initial} />
        </>
    );
}

export default Nav;
