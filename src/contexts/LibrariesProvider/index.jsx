'use client'
import React, { createContext, useEffect, useState, useContext } from 'react';
import { DomainContext } from '../DomainProvider';

export const LibrariesContext = createContext(null);

export const LibraryProvider = ({ children }) => {

    const { domain } = useContext(DomainContext);

    useEffect(() => {
        initialLoad()
    }, [])

    const [styles, setStyles] = useState();
    const [components, setComponents] = useState();
    const [logic, setLogic] = useState();

    const initialLoad = async () => {
        const domainConfig = (await import(`../../app/domain/${domain}/domain.config`))
        const THEMEDIR = domainConfig.THEMEDIR
        const CLDIR = domainConfig.CLDIR
        const LOGICDIR = domainConfig.LOGICDIR
        const stylesLib = (await import(`../../themes/${THEMEDIR}`)).default
        const componentsLib = (await import(`../../libs/${CLDIR}`)).default
        const logicLib = (await import(`@/useLogic/ButtonLogic/${LOGICDIR}`))
        setStyles(stylesLib)
        setComponents(componentsLib)
        setLogic(logicLib)
    }

    return (
        styles && components && logic ?
            <LibrariesContext.Provider value={{ styles, components, logic }}>
                {children}
            </LibrariesContext.Provider>
            : <div style={{ height: "100vh", width: "100vw", textAlign: "center", padding: "50px" }}>
                <span>Loading...</span>
            </div>
    );
};