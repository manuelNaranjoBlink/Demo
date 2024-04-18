import React from "react";
import NavigationItem from "./components/NavigationItem";
import { BlinkAnalyticsIcon, CalendarioIcon, ClasesIcon, ContenidoIcon, LogoutIcon } from "./components/Icons";
import Image from "next/image";

const navigationItems = [
    { text: "Contenido", icon: ContenidoIcon, href: '/resources' },
    { text: "Clases", icon: ClasesIcon, href: '/groups' },
    { text: "Calendario", icon: CalendarioIcon },
    { text: "BlinkAnalytics", icon: BlinkAnalyticsIcon },
    { text: "Logout", icon: LogoutIcon, href: '/logout' },
];

export default function NavigationBar(props) {

    const { openNavBar } = props;

    return (
        <nav className={openNavBar ? 'navigation-menu open' : 'navigation-menu'} >
            <div className="info-section">
                <div className="user-section">
                    <div className="user-profile"></div>
                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 2.25L10 9.75L17.5 2.25" stroke="black" strokeWidth="4.33333" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <ul className="navigation-menu-list">
                    {navigationItems.map((item, index) => {
                        return <NavigationItem key={index} openNavBar={openNavBar} text={item.text} icon={item.icon} href={item.href} />
                    })}
                </ul>
            </div>
            <div className="logo-section">
                <Image
                    src="/img/logo.png"
                    alt="Logo"
                    width={160}
                    height={80}
                />
            </div>
        </nav>
    )
};