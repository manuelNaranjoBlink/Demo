import React from "react";
import { AboutIcon, ContactIcon, FreeTrialIcon, HomeIcon, LogoutIcon, SettingsIcon, UserNameIcon } from "./components/Icons";
import Button from "../../../Button";

const menuItems = [
    { text: "Mis contenidos", active: true, action: () => alert("Mis contenidos")  },
    { text: "Contenidos del centro educativo", active: false, action: () => alert("Contenidos del centro") }
];

export default function AppBar() {

    return (
        <nav className='appBar'>
            <ul className='items-list'>
                {menuItems.map((item, i) =>
                    <li key={i} className={item.active ? 'appBar-item active' : 'appBar-item'} >
                        <Button
                            key={item.text}
                            className='appbar-btn'
                            onClick={item?.action}
                            item={item}
                        />
                    </li>
                )}
            </ul>
        </nav >
    )
};