import { LibrariesContext } from "@/contexts/LibrariesProvider"
import React, { useContext } from "react"

export default function NavigationItem({ openNavBar, icon, text }) {

    const { styles } = useContext(LibrariesContext)

    return (
        <li className={openNavBar ? styles.navigationBar.navigationOpenButon : styles.navigationBar.navigationButon}>
            {icon}
            {openNavBar && <span style={{ marginLeft: '8px' }}>{text}</span>}
        </li >
    )
}