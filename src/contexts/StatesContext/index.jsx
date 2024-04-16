'use client'
import React, { createContext, useState } from 'react';

export const StatesContext = createContext(null);

export const StatesProvider = ({ children, styles, logicApp }) => {

    const [openNavBar, setOpenNavBar] = useState()

    return (
        <StatesContext.Provider value={{ openNavBar, setOpenNavBar }}>
            {children}
        </StatesContext.Provider>
    );
};