import React from "react"
import { useRouter } from "next/navigation";

export default function NavigationItem({ openNavBar, icon, text, href }) {

    const { push } = useRouter();

    return (
        <li className={openNavBar ? 'navigation-button open' : 'navigation-button'} onClick={() => href && push(href)}>
            {icon}
            {openNavBar && <span style={{ marginLeft: '8px' }}>{text}</span>}
        </li >
    )
}