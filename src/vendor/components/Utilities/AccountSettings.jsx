"use client"

import Styling from './AccountSettingsStyle.module.css';
import Border from '../../../components/Border.module.css';
import cookieFunctions from '../../../features/cookie/cookie_manager';

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { Outlet, Link } from "react-router-dom";

function removeSavedAccount(){
    cookieFunctions.removeCookie();
    console.log("Logged Out");
}

const logOutButton = (
    <>
    <button onClick={removeSavedAccount}><Link to="/Login">Logout</Link></button>
    <Outlet />
    </>
)

export default function AccountSettings(props) {
    const isVisible = props.isOpen;

    return (
        <div className={Styling.container}>
            <AnimatePresence initial={false}>
                {isVisible ? (
                    <motion.div
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        transition={{ duration: 0.3 }}
                        exit={{ opacity: 0, y: -25 }}
                        className={Styling.box +" " +Border.defaultBorder}
                    >
                        {logOutButton}
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </div>
    )
}