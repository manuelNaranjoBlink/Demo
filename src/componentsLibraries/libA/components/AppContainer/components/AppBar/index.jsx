import React from "react";
import { AboutIcon, ContactIcon, FreeTrialIcon, HomeIcon, SettingsIcon, UserNameIcon } from "./components/Icons";
import Button from "../../../Button";

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

    return (
        <nav className='appBar' >
            <ul key={0} className='items-list' >
                <li onClick={() => props.setOpenNavBar()} className='menu-navigation-button'>
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
                            <circle className='fill-svg' cx={48} cy={64} r={48} />
                            <rect x={160} y={16} className='fill-svg' width={352} height={96} />
                            <circle className='fill-svg' cx={48} cy={256} r={48} />
                            <rect x={160} y={208} className='fill-svg' width={352} height={96} />
                            <circle className='fill-svg' cx={48} cy={448} r={48} />
                            <rect x={160} y={400} className='fill-svg' width={352} height={96} />
                        </g>
                    </svg>
                </li>
                {menuItems[0].map((item) =>
                    <li key={item.text} >
                        <Button
                            key={item.text}
                            className='appbar-btn'
                            onClick={item?.action}
                            item={item}
                            startIcon={item.icon}
                        />
                    </li>
                )}
            </ul>
            {menuItems.map((menuItem, i) =>
                i > 0 &&
                <ul key={i} className='items-list' >
                    {menuItem.map((item) =>
                        <li key={item.text} >
                            <Button
                                key={item.text}
                                className='appbar-btn'
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