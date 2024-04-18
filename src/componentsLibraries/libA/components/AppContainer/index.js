'use client'
import React, { useState } from 'react';
import AppBar from './components/AppBar';
import NavigationBar from './components/NavigationBar';

export default function AppContainer({ children }) {

    const [openNavBar, setOpenNavBar] = useState(false)

    return (
        <div className='app-container'>
            <AppBar setOpenNavBar={() => setOpenNavBar(!openNavBar)} />
            <div className='main-content'>
                <NavigationBar openNavBar={openNavBar} />
                {children}
            </div>
        </div>
    );
};