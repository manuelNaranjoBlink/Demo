'use client'
import React, { useContext } from "react";
import { LibrariesContext } from "@/contexts/LibrariesProvider";
import { StatesContext } from "@/contexts/StatesContext";
import Button from "../Button";
import { AboutIcon, ContactIcon, FreeTrialIcon, HomeIcon, SettingsIcon, UserNameIcon } from "./components/Icons";

const menuItems = [[
    { text: "Home", icon: HomeIcon, action: () => { alert('Home') } },
    { text: "About Us", icon: AboutIcon },
    { text: "Free Trial", icon: FreeTrialIcon },
    { text: "Contact", icon: ContactIcon }
], [
    { text: "UserName", icon: UserNameIcon },
    { text: "Settings", icon: SettingsIcon },
    { text: "Logout", href: '/logout' },
]];


export default function AppBar(props) {

    const { styles } = useContext(LibrariesContext);
    const { openNavBar, setOpenNavBar } = useContext(StatesContext);

    return (
        <nav className={styles.appBar.appBar} >
            <ul key={0} className={styles.appBar.ul} >
                <li onClick={() => setOpenNavBar(!openNavBar)} className={styles.appBar.navigationButton}>
                    <svg
                        version="1.1"
                        id="_x32_"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                        style={{ width: '50%', height: '50%' }}
                    >
                        <g>
                            <circle className={styles.appBar.fillSvg} cx={48} cy={64} r={48} />
                            <rect x={160} y={16} className={styles.appBar.fillSvg} width={352} height={96} />
                            <circle className={styles.appBar.fillSvg} cx={48} cy={256} r={48} />
                            <rect x={160} y={208} className={styles.appBar.fillSvg} width={352} height={96} />
                            <circle className={styles.appBar.fillSvg} cx={48} cy={448} r={48} />
                            <rect x={160} y={400} className={styles.appBar.fillSvg} width={352} height={96} />
                        </g>
                    </svg>
                </li>
                {menuItems[0].map((item) =>
                    <li key={item.text} >
                        <Button
                            key={item.text}
                            className={styles.appBar.buttonCustomStyle}
                            onClick={item?.action}
                            item={item}
                            startIcon={item.icon}
                        />
                    </li>
                )}
            </ul>
            {menuItems.map((menuItem, i) =>
                i > 0 &&
                <ul key={i} className={styles.appBar.ul} >
                    {menuItem.map((item) =>
                        <li key={item.text} >
                            <Button
                                key={item.text}
                                className={styles.appBar.buttonCustomStyle}
                                onClick={item?.action}
                                item={item}
                                startIcon={item.icon}
                            />
                        </li>)}
                </ul>
            )}
        </nav>
    )
};