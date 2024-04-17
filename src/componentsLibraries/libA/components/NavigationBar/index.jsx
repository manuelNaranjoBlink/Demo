'use client'
import React, { useContext } from "react";
import { LibrariesContext } from "@/contexts/LibrariesProvider";
import { StatesContext } from "@/contexts/StatesContext";
import NavigationItem from "./components/NavigationItem";
import { BlinkAnalyticsIcon, CalendarioIcon, CatálogoIcon, ClasesIcon, ContenidoIcon, DocentesIcon, MensajesIcon, RecursosIcon, RúbricasIcon } from "./components/Icons";

const navigationItems = [
    { text: "Contenido", icon: ContenidoIcon, href: '/resources' },
    { text: "Recursos", icon: RecursosIcon },
    { text: "Clases", icon: ClasesIcon, href: '/groups' },
    { text: "Rúbricas", icon: RúbricasIcon },
    { text: "Mensajes", icon: MensajesIcon },
    { text: "Calendario", icon: CalendarioIcon },
    { text: "Docentes", icon: DocentesIcon },
    { text: "Catálogo", icon: CatálogoIcon },
    { text: "BlinkAnalytics", icon: BlinkAnalyticsIcon },
];

export default function NavigationBar(props) {

    const { styles } = useContext(LibrariesContext);
    const { openNavBar } = useContext(StatesContext);

    return (
        <nav className={openNavBar ? styles.navigationBar.navigationBarOpened : styles.navigationBar.navigationBar} >
            <ul>
                {navigationItems.map((item, index) => {
                    return <NavigationItem key={index} openNavBar={openNavBar} text={item.text} icon={item.icon} href={item.href} />
                })}
            </ul>
        </nav>
    )
};