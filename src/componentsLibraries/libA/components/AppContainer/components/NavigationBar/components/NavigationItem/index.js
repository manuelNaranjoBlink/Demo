import React from "react"
import { useRouter, usePathname } from "next/navigation";

export default function NavigationItem({ openNavBar, icon, text, href }) {

    const { push } = useRouter();
    const pathname = usePathname();
    let className = ['navigation-button']
    if (pathname === href) {
        className.push('active')
    }
    if (openNavBar) {
        className.push('open')
    }

    return (
        <li className={className.join(' ')} onClick={() => href && push(href)}>
            {icon}
            {openNavBar && <span style={{ marginLeft: '8px' }}>{text}</span>}
        </li >
    )
}