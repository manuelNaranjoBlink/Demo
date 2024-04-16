'use client'
import { LibrariesContext } from "@/contexts/LibrariesProvider";
import React, { useContext, useState } from "react";
import { useRouter } from 'next/navigation'

export default function Button({ item, className, onClick, disabled, startIcon, endIcon, customStyle }) {

    const [mouseIn, setMouseIn] = useState(false);
    const { logic } = useContext(LibrariesContext);
    const router = useRouter()

    const { performDefaultAction } = logic.default();
    const handleClick = () => {
        if (onClick) {
            onClick();
        } else if (item.href) {
            router.push(item.href)
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
            {item.icon ? mouseIn ? item.text : item.icon : item.text}
            {endIcon}
        </button>
    )
};