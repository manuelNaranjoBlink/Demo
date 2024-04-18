'use client'
import { useState } from "react";
import AppBar from "./components/AppBar";
import NavigationBar from "./components/NavigationBar";

export default function AppContainer({ children }) {

    const [openNavBar, setOpenNavBar] = useState(false)

    return (
        <div className='app-container'>
            <NavigationBar openNavBar={openNavBar} />
            <div className='main-content'>
                <div className='box-content'>
                    <AppBar setOpenNavBar={() => setOpenNavBar(!openNavBar)} />
                    {children}
                </div>
            </div>
        </div>
    )
}