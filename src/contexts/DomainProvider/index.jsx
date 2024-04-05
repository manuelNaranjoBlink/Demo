'use client'
import React, { createContext } from 'react';

export const DomainContext = createContext(null);

export const DomainProvider = ({ children, domain }) => {

    return (
        <DomainContext.Provider value={{ domain }}>
            {children}
        </DomainContext.Provider>
    );
};