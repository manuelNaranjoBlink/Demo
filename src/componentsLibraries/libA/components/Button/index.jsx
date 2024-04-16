'use client'
import { LibrariesContext } from "@/contexts/LibrariesProvider";
import { useRouter } from 'next/navigation';
import React, { useContext } from "react";

export default function Button({ item, className, onClick, disabled, startIcon }) {

    const { logic } = useContext(LibrariesContext);
    const { performDefaultAction } = logic.default();
    const router = useRouter()

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
            className={className}
            disabled={disabled}
            onClick={handleClick}
        >
            {/* {startIcon} */}
            {item.text}
        </button>
    )
};