'use client'
import React, { useEffect, useState } from "react";

import LogicLibrary from "@/useLogic/ButtonLogic/index";

export default ({ item, className, onClick, disabled, startIcon, endIcon, customStyle }) => {

    const [mouseIn, setMouseIn] = useState(false);
    const useLogic = LogicLibrary.getInstance()
    const { performDefaultAction } = useLogic();
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