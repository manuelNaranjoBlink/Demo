'use client'
import { LibrariesContext } from "@/contexts/LibrariesProvider";
import React, { useContext } from "react";

export default ({ item, className, onClick, disabled, startIcon }) => {

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
            className={className}
            disabled={disabled}
            onClick={handleClick}
        >
            {/* {startIcon} */}
            {item.text}
        </button>
    )
};