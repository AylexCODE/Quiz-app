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

    async function logOut(){
        try {
            await cookieFunctions.removeCookie();
        } catch (noCookie){}
        navigate("/", { replace: true });
    }

    const logOutButton = (
        <>
        <button onClick={logOut}><Link to="/Login">Logout</Link></button>
        <Outlet />
        </>
    )

    return (
        <div className={Styling.container}>
            <AnimatePresence initial={false}>
                {isVisible ? (
                    <motion.div
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: 100, y: 0 }}
                        transition={{ duration: 0.3 }}
                        exit={{ opacity: 0, y: -25 }}
                        className={Styling.box +" " +Border.defaultBorder}
                    >
                        <motion.ul
                            initial="hidden"
                            whileInView="visible"
                            variants={{visible: { opacity: 1 }, hidden: { opacity: 0 }}}
                        >
                            <motion.li custom={1} variants={options}>Yoo</motion.li>
                            <motion.li custom={2} variants={options}>{logOutButton}</motion.li>
                        </motion.ul>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </div>
    )
}