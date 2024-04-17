import React, { useContext } from "react"
import { useRouter } from "next/navigation";
import { LibrariesContext } from "@/contexts/LibrariesProvider"

export default function NavigationItem({ openNavBar, icon, text, href }) {

    const { styles } = useContext(LibrariesContext)
    const { push } = useRouter();

    return (
        <li className={openNavBar ? styles.navigationBar.navigationOpenButon : styles.navigationBar.navigationButon} onClick={() => href && push(href)}>
            {icon}
            {openNavBar && <span style={{ marginLeft: '8px' }}>{text}</span>}
        </li >
    )
}