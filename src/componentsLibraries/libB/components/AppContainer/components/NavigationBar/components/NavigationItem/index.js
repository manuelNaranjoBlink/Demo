import React from "react"
import { useRouter, usePathname } from "next/navigation";

export default function NavigationItem({ icon, text, href }) {

    const { push } = useRouter();
    const pathname = usePathname();
    let className = ['navigation-button']
    if (pathname === href) {
        className.push('active')
    }


    return (
        <li className={className.join(' ')} onClick={() => href && push(href)}>
            {icon}
            <span style={{ marginLeft: '8px' }}>{text}</span>
        </li >
    )
}