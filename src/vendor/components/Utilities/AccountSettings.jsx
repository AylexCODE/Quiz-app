"use client"

import Styling from './AccountSettingsStyle.module.css';
import Border from '../../../components/Border.module.css';

import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"

export default function AccountSettings(props) {
    const isVisible = props.isOpen;

    return (
        <div className={Styling.container}>
            <AnimatePresence initial={false}>
                {isVisible ? (
                    <motion.div
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: 100, y: 0, duration: 1 }}
                        exit={{ opacity: 0, y: -25 }}
                        className={Styling.box +" " +Border.defaultBorder}>

                    </motion.div>
                ) : null}
            </AnimatePresence>
        </div>
    )
}