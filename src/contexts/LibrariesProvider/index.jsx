'use client'
import React, { createContext, useEffect, useState } from 'react';

export const LibrariesContext = createContext(null);

export const LibraryProvider = ({ children, styles, logicApp }) => {

    useEffect(() => {
        initialLoad()
    }, [])

    const [logic, setLogic] = useState()

    const initialLoad = async () => {
        setLogic(await import("../../useLogic/ButtonLogic/" + logicApp))
    }


    return (
        logic && <LibrariesContext.Provider value={{ styles, logic }}>
            {children}
        </LibrariesContext.Provider>
    );
};