'use client'
import React from "react";
import LogicLibrary from "@/useLogic/ButtonLogic/index";

export default ({ item, className, onClick, disabled, startIcon }) => {
    const useLogic = LogicLibrary.getInstance()
    const { performDefaultAction } = useLogic();

    const handleClick = () => {
        console.log(onClick)
        if (onClick) {
            onClick();
        } else {
            performDefaultAction();
        }
    };

    return (
        <button
            className={className}
            disabled={disabled}
            onClick={handleClick}
        >
            {/* {startIcon} */}
            {item.text}
        </button>
    )
};