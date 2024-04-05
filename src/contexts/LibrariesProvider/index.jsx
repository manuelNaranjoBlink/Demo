'use client'
import React, { createContext, useEffect, useState } from 'react';

export const LibrariesContext = createContext(null);

export const LibraryProvider = async ({ children, styles, logicApp }) => {
    
    const logic = (await import("../../useLogic/ButtonLogic/" + logicApp))

    return (
        <LibrariesContext.Provider value={{ styles, logic }}>
            {children}
        </LibrariesContext.Provider>
    );
};