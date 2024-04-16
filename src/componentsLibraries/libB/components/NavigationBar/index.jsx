'use client'
import React, { useContext } from "react";
import { LibrariesContext } from "@/contexts/LibrariesProvider";
import { StatesContext } from "@/contexts/StatesContext";
import NavigationItem from "./components/NavigationItem";
import { BlinkAnalyticsIcon, CalendarioIcon, ClasesIcon, ContenidoIcon } from "./components/Icons";

const navigationItems = [
    { text: "Contenido", icon: ContenidoIcon },
    { text: "Clases", icon: ClasesIcon },
    { text: "Calendario", icon: CalendarioIcon },
    { text: "BlinkAnalytics", icon: BlinkAnalyticsIcon }
];

export default function NavigationBar(props) {

    const { styles } = useContext(LibrariesContext);
    const { openNavBar } = useContext(StatesContext);

    return (
        <nav className={openNavBar ? styles.navigationBar.navigationBarOpened : styles.navigationBar.navigationBar} >
            <ul>
                {navigationItems.map((item, index) => {
                    return <NavigationItem key={index} openNavBar={openNavBar} text={item.text} icon={item.icon} />
                })}
            </ul>
        </nav>
    )
};