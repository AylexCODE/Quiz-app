"use client"

import Styling from './AccountSettingsStyle.module.css';

import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import { useState } from "react"

export default function AccountSettings(props) {
    const isVisible = props.isOpen;

    return (
        <div className={Styling.container}>
            <AnimatePresence initial={false}>
                {isVisible ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className={Styling.box}
                        key="box"
                    />
                ) : null}
            </AnimatePresence>
        </div>
    )
}