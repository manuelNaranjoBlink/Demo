'use client'
import { LibrariesContext } from "@/contexts/LibrariesProvider";
import React, { useContext, useState } from "react";


export default ({ item, className, onClick, disabled, startIcon, endIcon, customStyle }) => {

    const [mouseIn, setMouseIn] = useState(false);
    const { logic } = useContext(LibrariesContext);

    const { performDefaultAction } = logic.default();
    const handleClick = () => {
        if (onClick) {
            onClick();
        } else {
            performDefaultAction();
        }
    };

    return (
        <button
            disabled={disabled}
            className={className}
            onClick={handleClick}
            style={customStyle}
            onMouseEnter={() => setMouseIn(true)} onMouseLeave={() => setMouseIn(false)}>
            {startIcon}
            {item.icon ? mouseIn ? item.text : item.icon : item.text}
            {endIcon}
        </button>
    )
};