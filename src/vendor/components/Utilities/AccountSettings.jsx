"use client"

import Styling from './AccountSettingsStyle.module.css';
import Border from '../../../components/Border.module.css';
import cookieFunctions from '../../../features/cookie/cookie_manager';

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { Outlet, Link, useNavigate } from "react-router-dom";

const options = {
    hidden: { opacity: 0, x: 10 },
    visible: (secondDelay) => ({
        opacity: 1,
        x: 0,
        transition: { delay: secondDelay * 0.3 }
    })
}

export default function AccountSettings(props) {
    const navigate = useNavigate();
    const isVisible = props.isOpen;

    const userName = props.initialName;

    async function logOut(){
        try {
            await cookieFunctions.removeCookie();
        } catch (noCookie){}
        navigate("/", { replace: true });
    }

    const logOutButton = (
        <>
        <button onClick={logOut} className={Styling.logOutBtn}><Link to="/Login">Log out</Link></button>
        <Outlet />
        </>
    )

    return (
        <div className={Styling.container}>
            <AnimatePresence initial={false}>
                {isVisible ? (
                    <motion.div
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: 300, y: 0 }}
                        transition={{ duration: 0.3 }}
                        exit={{ opacity: 0, y: -25 }}
                        className={Styling.box +" " +Border.defaultBorder}
                        >
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={{visible: { opacity: 1 }, hidden: { opacity: 0 }}}
                            className={Styling.profileSettings}
                            >
                                <span>{userName[0]}</span>
                                <p>{userName}</p>
                                <Link to="/Account">Account Settings</Link>
                                <Outlet />
                            </motion.div>
                        <motion.ul
                            initial="hidden"
                            whileInView="visible"
                            variants={{visible: { opacity: 1 }, hidden: { opacity: 0 }}}
                            className={Styling.profileOptions}
                            >
                            <motion.li custom={1} variants={options}>Points</motion.li>
                            <motion.li custom={2} variants={options}>Inbox</motion.li>
                            <motion.li custom={3} variants={options}>Tools</motion.li>
                            <motion.li custom={4} variants={options}>About</motion.li>
                            <motion.li>{logOutButton}</motion.li>
                        </motion.ul>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </div>
    )
}
